import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared-service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../toast/toast.service';

interface IHome {
  id?: number;
  bookImage: string;
  bookName: string;
  bookAuthor: string;
  bookPrice: string;
  bookQuantity: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: object;

  constructor(
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const resp = await this.getBookByID(this.activatedRoute.snapshot.params[`id`]);
    this.book = resp || [];
    console.log('data', resp);
  }
  async getBookByID(book) {
    const resp = await this.http.get(`book/id/${book}`);
    return resp || [];
  }

}
