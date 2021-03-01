/*
; ==============================
; Title: total.component
; Author: Brooklyn Hairston
; Date: 26 February 2021
; Description: Total Component
; ==============================
*/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  //input statement
  @Input() invoiceTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
