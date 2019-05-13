import { Component, OnInit } from '@angular/core';

import { book } from './books.model';

@Component({
  selector: 'book-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.sass']
})
export class DemoFormComponent implements OnInit {
    
    model = new book(1, "", "", "http://");

  constructor() { }

  ngOnInit() {
  }
    
    get currentBook(){
         return JSON.stringify(this.model)
    }

}
