/*
; ==============================
; Title: start-repair.components
; Author: Brooklyn Hairston
; Date: 23 February 2020
; Description: Start Repair component
; ==============================
*/

import { Component, OnInit } from '@angular/core';

//imports the IServices interface
import { IServices } from '../services.interface';

@Component({
  selector: 'app-start-repair',
  templateUrl: './start-repair.component.html',
  styleUrls: ['./start-repair.component.css']
})
export class StartRepairComponent implements OnInit {

  //variable declarations
  serviceEntry: IServices;
  selectableServices: Array<string> = [
    'Password Reset $39.99',
    'Spyware Removal $99.99',
    'RAM Upgrade $129.99',
    'Software Installation $49.99',
    'Tune-up $89.99',
    'Keyboard Cleaning $45.00',
    'Disk Clean-up $149.99'
  ];

  serviceEntries: Array<IServices> = [];
  invoiceTotal: number = 0;
  parts: number= 0;
  labor: number = 0;


  constructor() {
    this.serviceEntry = {} as IServices;
  }

  /**
   * @params N/A
   * @description A loop that iterates over the serviceEntries array, checks the serviceEntry.service and assigns the value
   */
  calculateTotal() {
    let total: number = 0;
    for (let entry of this.serviceEntries) {
      console.log(entry.service)
      switch (entry.service) {
        case 'Password Reset $39.99':
          console.log('Password Reset Selected')
          total += 39.99;
          break;
        case 'Spyware Removal $99.99':
          console.log('Spyware Removal Selected')
          total += 99.99;
          break;
        case 'RAM Upgrade $129.99':
          console.log('RAM Upgrade Selected')
          total += 129.99;
          break;
        case 'Software Installation $49.99':
          console.log('Software Installation Selected')
          total += 49.99;
          break;
        case 'Tune-up $89.99':
          console.log('Tune-up Selected')
          total += 89.99;
          break;
        case 'Keyboard Cleaning $45.00':
          console.log('Keyboard Cleaning Selected')
          total += 45.00;
          break;
        case 'Disk Clean-up $149.99':
          console.log('Disk Clean-up Selected')
          total += 149.99;
          break;
    }
  }

//adds the total to the selected parts price and labor hours multiplied by 50 to return the invoice total
    console.log(total);
    this.invoiceTotal = total + this.parts + (this.labor * 50);
    console.log(this.invoiceTotal);
  }

  /**
   * @params N/A
   * @description Pushes the this.serviceEntry to the serviceEntries array
   * Sets the this.serviceEntry as an empty IServices object
   */
  addEntry() {
    this.serviceEntries.push(this.serviceEntry);
    this.serviceEntry = {} as IServices;
  }


  ngOnInit(): void {
  }

  /**
   * @params N/A
   * @description Sets serviceEntries to an empty array and invoiceTotal to 0
   */
  cancelTransaction() {
    this.serviceEntries = [];
    this.invoiceTotal = 0;
  }

}
