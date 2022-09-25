import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user/user.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  customerlist: User[]=[];
  @Output() add = new EventEmitter<User[]>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
        zip: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      }
    )
  }

  AddUser(userslist){
    this.customerlist.push(userslist.value);
    console.log(userslist.value);
    console.log("User Details: "+JSON.stringify(this.customerlist));
    this.add.emit(userslist.value);
  }

}
