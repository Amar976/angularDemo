import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title: string;
  magic: boolean;
  isUnchanged: boolean = true;
  twoWayBind: string = '2-way binding';
  userList = [
    { id: 1, name: 'David' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Amar' },
  ];

  constructor() { }

  ngOnInit() {
    this.title = 'Interpolation';
    this.magic = true;
  }

  onClick() {
    this.magic = !this.magic;
  }

}
