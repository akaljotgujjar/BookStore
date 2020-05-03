import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared-service/http.service';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: object;


  constructor(
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.book = {};
  }

  async createBook(book: any) {
    const resp = await this.http.post('book', book);
    return book || null;
  }

  async addBook(book: object) {
    const resp = await this.createBook(book);
    if (resp) {
      this.router.navigate(['']);
    }
  }
}
