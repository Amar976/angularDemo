import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user/user.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: User[]=[];

  constructor() { }

  ngOnInit() {
    
  }

  display(list: User){
    this.userList.push(list);
    
  }

}
