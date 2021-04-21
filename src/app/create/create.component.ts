import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainservice.service';
import { Router } from '@angular/router';

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
  account: string = ""
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
    let dataStatus ={
      account: this.account,
      statusContent:  []
    }
    this.dataCreate = {
      account: this.account,
      password: this.password
    }

    this.callApi.get('http://localhost:3000/login').subscribe(data => {
      this.dataLogin = data;
      for (let i = 0; i < this.dataLogin.length; i++) {
        if (this.dataLogin[i].account == this.account) {
          this.iDuplicate = true;
        }
      }if ( this.account.length <3  && this.password.length <3) {
        this.checkCreate = "Tai khoản và mật khẩu ít nhất 3 ký tự"
      }
       else if(this.iDuplicate == false  && this.account.length >2  && this.password.length >2) {
        this.callApi.post('http://localhost:3000/login', this.dataCreate).subscribe(data => {
          this.checkCreate = "dang ky thanh cong"
          this.dataLogin = data;
        })
        this.callApi.post('http://localhost:3000/status', dataStatus  )
        .subscribe(data => {
          console.log('thanh cong')
        })
      }else{
        this.checkCreate = "Tai khoan da ton tai"
      }
      this.iDuplicate = false;
    })


  }

}
