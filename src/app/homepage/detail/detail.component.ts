import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MainService } from '../../mainservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public callApi: MainService, private router: ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    this.getDataBook(this.router.snapshot.params.id)
    this.getDataCart()
  }
  bookDetail : any
  bookCart : any
  cart:any
  count : number = 1
  getDataBook(id:any) { 
    this.callApi.get(`http://localhost:3000/book/${id}`).subscribe(
      res => {
        this.bookDetail = res;
        console.log( this.bookDetail ,123)   
        this.bookDetail['description'] = this.bookDetail['description'][0]
      })
      
  }
  getDataCart() { 
    this.callApi.get(`http://localhost:3000/login/${localStorage.getItem('id')}`).subscribe(
      res => {
        this.bookCart = res;
        console.log( this.bookCart ,456)   
        this.cart = this.bookCart['cart']
        console.log( this.cart ,789) 
      })
  }
  quantity(data:boolean){
    data? this.count++ :(this.count>1)? this.count-- : this.count=1
  }
  addToCart(){
    if(!this.cart) {alert("chưa đăng nhập")}
    let id = localStorage.getItem('id')
    this.bookDetail['quantity'] = this.count
    this.bookDetail['payment'] = false
    this.bookDetail['check'] = false
    this.bookDetail['code'] = Math.floor(Math.random() * 99999);
    this.bookDetail['total'] = this.count*this.bookDetail.price
    console.log(this.bookDetail)
    this.cart.push(this.bookDetail)
    let newCart = {
      id: localStorage.getItem('id'),
      cart: this.cart
    }
    this.callApi.patch("http://localhost:3000/login",newCart).subscribe(
      res => {
        alert("Đã thêm vào giỏ hàng")
        console.log(res)  
        this.Router.navigate([`/cart/${id}`]) 
      })
      
  }
}
