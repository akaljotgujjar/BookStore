import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared-service/http.service';
import { ToastService } from '../toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

interface IHome {
  id?: number;
  bookImage: string;
  bookName: string;
  bookAuthor: string;
  bookType: string;
  bookPrice: string;
  bookQuantity: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = [];
  homeCard: Array<IHome> = [];
  loggedIn = false;
  bookParams = '';
  constructor(
    private toastService: ToastService,
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    const token = localStorage.getItem('id_token');
    if (token == null) {
      this.loggedIn = false;
      this.router.navigate(['signIn']);
    } else {
      this.loggedIn = true;
    }
    await this.refresh();
  }

  async refresh() {
    this.books = await this.getBooks('book');
  }

  async getBooks(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getBooks()', resp);
    return resp;
  }

  async createBook() {
    const book = {
      name: null,
      author: null,
      isbn: null,
      description: null
    };
    const resp = await this.http.post('book', book);
    console.log('from createBook() resp: ', resp);
    if (resp) {
      // this.refresh();
      this.books.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'Book creation failed!');
    }
    return resp;
  }

  async updateBook(book: any) {
    const resp = await this.http.put(`book/id/${book.id}`, book);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Book updated successfully!');
    }
    return resp;
  }

  async removeBook(book: any, index: number) {
    const resp = await this.http.delete(`book/id/${book.id}`);
    if (resp) {
      this.refresh();
    } else {
      this.toastService.showToast('danger', 3000, 'Book deletion failed!');
    }
  }

  async AddToCart(book: any) {
    const resp = await this.http.post('ShoppingCart', book);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Added successfully');
    }
  }

  async getBookByID(book: any, index: number) {
    const resp = await this.http.get(`book/id/${book.id}`);
    return book || [];
  }

  goToCreate() {
    this.router.navigate(['book-create']);
  }

}
