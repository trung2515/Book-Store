import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MainService } from '../../mainservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 

  constructor(private router: ActivatedRoute,private Router:Router) {}

  ngOnInit(): void {
  }
  
 goCart(){
   let id = localStorage.getItem('id')
  this.Router.navigate([`/cart/${id}`])
 }
 logout(){
   localStorage.removeItem('id')
   localStorage.removeItem('cart')
   this.Router.navigate([`/login`])
 }
}
