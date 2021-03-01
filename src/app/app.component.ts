/*
; ==============================
; Title: app.component.ts
; Author: Brooklyn Hairston
; Date: 23 February 2021
; Description: App Component
; ==============================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //creates a new variable
  title: string;

  //assigns a value to the assignment variable
  constructor() {
    this.title = "Bob's Computer Repair Shop";
  }
}
