import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uid;
  constructor() { }

  ngOnInit() {
    this.uid=localStorage.getItem('uid')
  }

}
