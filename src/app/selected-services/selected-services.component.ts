/*
; ==============================
; Title: selected-services.component.ts
; Author: Brooklyn Hairston
; Date: 23 February 2021
; Description: Selected Services Component
; ==============================
*/

//import statements
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-services',
  templateUrl: './selected-services.component.html',
  styleUrls: ['./selected-services.component.css']
})
export class SelectedServicesComponent implements OnInit {

  //input statements
  @Input() service: string;
  @Input() parts: number;
  @Input() labor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
