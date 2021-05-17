import { Component, OnInit } from '@angular/core';
import { MainService } from '../../mainservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  constructor( public callApi: MainService ,private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }
  cart:any
  listBook:any 
  getData() { 
    this.callApi.get('http://localhost:3000/book').subscribe(
      res => {
        this.listBook = res;
        console.log(this.listBook)    
      })
      this.cart = localStorage.getItem('cart')
      console.log(this.cart,66)
  }
  showDetail(id:any){
  this.router.navigate([`/datail/${id}`])
 }
}
