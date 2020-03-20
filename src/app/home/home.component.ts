import { Component, OnInit } from '@angular/core';

interface IHome {
  id?: number;
  bookImage: string;
  bookName: string;
  bookAuthor: string;
  bookType: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeCard: Array<IHome> = [];

  constructor() { }

  ngOnInit() {
    this.homeCard = [
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book1',
        bookAuthor: 'Author1',
        bookType: 'English'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book2',
        bookAuthor: 'Author2',
        bookType: 'History'
      },
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book3',
        bookAuthor: 'Author3',
        bookType: 'Math'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book4',
        bookAuthor: 'Author4',
        bookType: 'Science'
      },
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book5',
        bookAuthor: 'Author5',
        bookType: 'English'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book6',
        bookAuthor: 'Author6',
        bookType: 'History'
      },
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book7',
        bookAuthor: 'Author7',
        bookType: 'Math'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book8',
        bookAuthor: 'Author8',
        bookType: 'Science'
      },
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book9',
        bookAuthor: 'Author9',
        bookType: 'English'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book10',
        bookAuthor: 'Author10',
        bookType: 'History'
      },
      {
        bookImage: '../../assets/img/pic1.jpg',
        bookName: 'Book11',
        bookAuthor: 'Author11',
        bookType: 'Math'
      },
      {
        bookImage: '../../assets/img/pic2.jpg',
        bookName: 'Book12',
        bookAuthor: 'Author12',
        bookType: 'Science'
      }
    ];
  }

}
