import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared-service/http.service';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: object = {};

  constructor(
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) { }
  async ngOnInit() {
    const resp = await this.getBookById(this.activatedRoute.snapshot.params[`id`]);
    this.book = resp.data || [];

  }

  async getBookById(bookID) {
    const resp = await this.http.get(`book/id/${bookID}`);
    return resp || [];
  }



  async update(bookID, book) {
    const resp = await this.http.put(`book/id/${bookID}`, book);
    return resp;
  }

  async updateBook(book: any) {
    const bookID = book.id;
    const resp = await this.update(bookID, book);
    if (resp) {
      this.router.navigate(['']);
    }
  }

}

// this.activatedRoute.snapshot.params['id']
