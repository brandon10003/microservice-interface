import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
