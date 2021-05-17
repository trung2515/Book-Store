import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainservice.service';
import { Router } from '@angular/router';
import { numbers } from '@material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private callApi: MainService, private router: Router) { }

  ngOnInit(): void {
  }
  iDuplicate: boolean = false
  checkCreate: string = ""
  username: string = ""
  password: string = ""
  dataCreate: any = {
    account: "",
    password: ""
  }
  dataLogin: any = {
    account: "",
    password: ""
  }

  create() {
    this.dataCreate = {
      username: this.username,
      password: this.password,
      crart:[]
    }

    this.callApi.get('http://localhost:3000/login').subscribe(data => {
      this.dataLogin = data;
      for (let i = 0; i < this.dataLogin.length; i++) {
        if (this.dataLogin[i].username == this.username) {
          this.iDuplicate = true;
        }
      }
      
      if ( this.username.length <3  && this.password.length <3) {
        alert("Tai khoản và mật khẩu ít nhất 3 ký tự")
      }
      else if(this.iDuplicate == true){
        alert("Tài Khoản đãn tồn tại")
      }
       else if(this.iDuplicate == false  && this.username.length >2  && this.password.length >2) {
        this.callApi.post('http://localhost:3000/login', this.dataCreate).subscribe(data => {
          alert("Đăng ký thành công")
          this.router.navigate(['/login'])
        })
  
      }
      this.iDuplicate = false;
    })


  }

}
