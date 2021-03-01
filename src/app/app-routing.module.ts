/*
; ==============================
; Title: app-routing.module.ts
; Author: Brooklyn Hairston
; Date: 23 February 2021
; Description: App Routing Module
; ==============================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import statement for app components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StartRepairComponent } from './start-repair/start-repair.component';

//creates router paths to components
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'start-repair',
    component: StartRepairComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
