import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MainService } from '../mainservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tet:string ="zz"
  
  account: string = ""
  password: string = ""
  checkLg:string = ""
  n:boolean = false
  datalogin: any = [];
  dataUser:any = [
     { 
       account: "",
      password:""
    }
  ];
  constructor(private callApi: MainService, private router: Router) { }

  ngOnInit(): void {
  }
// cach 1 (dung vong for)
  login() {
    
    this.dataUser =  {
        account: this.account,
        password: this.password
      };
    this.callApi.get('http://localhost:3000/login').subscribe(data => {
      this.datalogin = data;
      for(let i = 0; 0 <= i <this.datalogin.length ; i++){
        if(this.datalogin[i].account == this.dataUser.account && this.datalogin[i].password == this.dataUser.password){
          this.n = true;
          localStorage.setItem("id",this.datalogin[i].id)
        }else{
          this.checkLg ="đăng nhập thất bại"
        }
        if(this.n==true){
          this.router.navigate(['/home'])
          localStorage.setItem('account', this.account)
        }
      }
    });

}


}
