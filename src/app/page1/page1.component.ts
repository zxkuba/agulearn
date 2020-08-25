import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page1';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.pageName = 'First page'} , 5000 );
  }

  onButtonClick(): void {
    alert('hello the date today is' + new Date());
  }
}
