import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Book[] = [];
  constructor() { }
  add(book:Book){
    console.log(book)
    this.cart.push(book);
  }
  get(){
    console.log(this.cart)
    return this.cart;
  }
  remove(book:Book){
    let arr = [];
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].name!=book.name){
        arr.push(this.cart[i]);
      }
    }
    this.cart = arr;
  }
}
