import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Book} from "../types/Book"

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy{

 @Input() book :Book = {} as Book;
 isInCart :boolean = false;
 @Output() bookEmitter = new EventEmitter<Book>();


 myInterval :any= null;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.myInterval = setInterval(()=>{
      console.log("Hello")
    },1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.myInterval)
    console.log({"onDestroy":"onDestroy"})
  }

  addToCart(){
    this.cartService.add(this.book)
    this.isInCart = true
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book)
  }

}
