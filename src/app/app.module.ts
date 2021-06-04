import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { SignUpComponent } from './sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
