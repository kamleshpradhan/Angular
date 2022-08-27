import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class BooksService {
  // getBooks: any;
constructor() { }
getBooks() {
    return  [
      {name:"World’s Greatest Classics (Box Set of 4 Books)",author:"Jane Austen",price:399,imgSrc:"https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY436_FMwebp_QL65_.jpg"},
      {name:"Spirituality For Leadership & Success (Box-Set of 5 Books): Gita, Vedanta, Hinduism, Buddha, Vivekananda",author:"Vivekananda",price:469,imgSrc:"https://m.media-amazon.com/images/I/817kzQd7tdL._AC_UY436_FMwebp_QL65_.jpg"},
      {name:"The Power of Your Subconscious Mind (PREMIUM PAPERBACK, PENGUIN INDIA)",author:" Joseph Murphy ",price:84,imgSrc:"https://images-eu.ssl-images-amazon.com/images/I/41WX6XCA5QL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"},
      {name:"The girl I met that summer",author:" Ashok Kumar",price:55,imgSrc:"https://images-eu.ssl-images-amazon.com/images/I/41MU1GhW6yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"}
    ]
  }
  
}




// class Name{
//   constructor(name:String){}
// }