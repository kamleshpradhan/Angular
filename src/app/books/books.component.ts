import { Component, OnDestroy, OnInit } from '@angular/core';
import {Book} from "../types/Book"
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit{
  constructor(private booksService:BooksService) { 
    // console.log({constructor:"Some Contsructor"})
    // doing dependency injection
    // const name = new Name( 'Sarthak' )s
    // this.booksService= new BooksService('Sarthak');
  }
  name :String = "Clean Code"
  author :String="Robert c modem"
  src :String="https://5.imimg.com/data5/WZ/NH/HL/SELLER-99655515/clean-code-a-handbook-of-agile-software-craftsmanship-book-500x500.jpg"
  name2 :String = "Pragmatic Programmer"
  author2:String = "David Thomas"
  src2 :String = "https://m.media-amazon.com/images/I/518FqJvR9aL.jpg"
  isShowing:Boolean = true;
  myName: any = "" 

  books:Book[] = []

  card:Book[] = [];


  //to fetch some data from an extrrnal api
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    console.log({Oninit:"On In It"})
  }

  handleClick(){
    this.author2 = "Samuel"
    console.log("Some Text")
  }
  handleMouseOver(){
    alert("arre baba mere pe mouse aaya")
  }
  toggleBooks(){
    this.isShowing = !this.isShowing;
  }
  addToCart(event:Book){
    console.log(event)
  }
}

