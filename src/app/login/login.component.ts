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
  status:string =""
  username: string = ""
  password: string = ""
  checkLg: boolean=false
  n: boolean=false
  datalogin: any = [];
  dataUser:any = [
     { 
      userName: '',
      password:""
    }
  ];
  constructor(private callApi: MainService, private router: Router) {
    
   }

  

  ngOnInit(): void {
  }


  login() {
    
    this.dataUser =  {
        username: this.username,
        password: this.password
      };
    this.callApi.get('http://localhost:3000/login').subscribe(data => {
      this.datalogin = data;
      for(let i = 0; 0 <= i <this.datalogin.length ; i++){
        if(this.datalogin[i].username == this.dataUser.username && this.datalogin[i].password == this.dataUser.password){
          this.checkLg = true;        
          localStorage.setItem("cart",JSON.stringify(this.datalogin[i]))
          localStorage.setItem("id",this.datalogin[i].id)
        }else{
         this.status="Tài Khoản hoặc mật khẩu không chính xác"
        }
        if(this.checkLg == true){
 
          this.router.navigate(['/home'])
        }
      }
    });
}


}
