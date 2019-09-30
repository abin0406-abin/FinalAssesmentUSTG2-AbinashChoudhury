import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetails: any[] = [];

  constructor(private mine:HttpClient) {
    this.mine.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(resData => {
      this.userDetails = resData;
      console.log(this.userDetails);
    })
  }
  ngOnInit() {
  }

}
