import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopStatusComponent } from '../pop-status/pop-status.component'
import { MainService } from '../../mainservice.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public dialog: MatDialog, public callApi: MainService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  dataStatus:any = []
  
  getData() {
    
    this.callApi.get('http://localhost:3000/status').subscribe(
      res => {
        this.dataStatus = res;
        console.log(this.dataStatus)
      })
  }

  popStatus() {
    const dialogRef = this.dialog.open(PopStatusComponent);
  }

  close() {
    this.dialog.closeAll()
  }
}
