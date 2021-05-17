import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MainService } from '../../mainservice.service'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public callApi: MainService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData(this.router.snapshot.params.id)
  }
  buy:any = []
  checkBuy:any
  totalMoney:number = 0
  totalBook:number = 0
  bookCart : any
  listBook : any
  data:any
  getData(id:any) { 
    this.callApi.get(`http://localhost:3000/login/${id}`).subscribe(
      res => {
        this.bookCart = res;
        this.listBook = this.bookCart['cart']
      })
  }
  removeBook(code:any){
    for(var i = 0;i<this.listBook.length;i++){
      if(this.listBook[i].code == code){
       let index = this.listBook.indexOf(this.listBook[i])
       this.listBook.splice(index,1)
      }
    }
    let newCart = {
      id: localStorage.getItem('id'),
      cart: this.listBook
    }
    this.callApi.patch("http://localhost:3000/login",newCart).subscribe(
      res => {
        alert("Đã xóa khỏi giỏ hàng") 
      })
  }
addBuy(e:any, value:any){
  if(e == true){
    this.buy.push(value)
  }else{
    let index = this.buy.indexOf(value);
    if (index > -1) {
      this.buy.splice(index, 1);
    }
  }
  this.totalBook = 0
  this.totalMoney = 0
  for(var i = 0; i<this.buy.length;i++){
    this.totalMoney = this.totalMoney + this.buy[i].total
    this.totalBook = this.totalBook + this.buy[i].quantity
  }
}
buyBook(){
  this.buy.forEach((element:any) => {
    let i = this.listBook.indexOf(element)
    if(i != -1){
      this.listBook[i].payment = true;
    }
    console.log(this.listBook)
  });
  let newCart = {
    id: localStorage.getItem('id'),
    cart: this.listBook
  }
  document.getElementById('thanhtoan')?.click()
  this.callApi.patch("http://localhost:3000/login",newCart).subscribe(
      res => {
        console.log(res) 
        setTimeout(() => {
          alert("Đã Thanh Toán") 
        }, 500);
        
      })
}


}
