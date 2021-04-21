import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { MainService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-pop-status',
  templateUrl: './pop-status.component.html',
  styleUrls: ['./pop-status.component.scss']
})
export class PopStatusComponent implements OnInit {

  constructor(public dialog: MatDialog, private callApi: MainService, private router: Router) { }

  ngOnInit(): void {
    
  }
  status:string = "";

  postStatus(){
    let dataStatus = {
      account : localStorage.getItem('account'),
      statusContent: this.status
    }
    this.callApi.post('http://localhost:3000/status', dataStatus).subscribe( data => {this.dialog.closeAll()})
  }

  
  close() {
    this.dialog.closeAll()
  }

  // status: string = "";
  // oldStatus:any = []
  // newStatus:any 
  // dataStatus: any;
  // url: string = 'http://localhost:3000/status' + '/' + localStorage.getItem('id')
  
  // getStatus(){
  //   this.callApi.get(this.url).subscribe(data => {
  //     this.dataStatus = data;    
  //     this.oldStatus.push(this.dataStatus.statusContent.toString())
  //   })
  // }

  // putStatus() {
  //   this.oldStatus.push(this.status)
  //   let obj = {
  //     id: localStorage.getItem('id'),
  //     account: localStorage.getItem('account'),
  //     statusContent: this.oldStatus 
  //   }
  //   this.callApi.put('http://localhost:3000/status', obj)
  //     .subscribe(
  //       res => {
  //         this.dialog.closeAll()
  //       }
  //     )
  // }

  // close() {
  //   this.dialog.closeAll()
  // }

}
