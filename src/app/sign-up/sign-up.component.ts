import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {User} from '../user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userservice:UserService) { }

  user: User = new User();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  signupForm=new FormGroup({
    username:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl()
  });

  saveUser(saveUser){
    this.user=new User();
    this.user.username=this.Username.value;
    this.user.firstName=this.FirstName.value;
    this.user.lastName=this.LastName.value;
    this.submitted = true;
    this.save();
  }



  save() {
    this.userservice.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  get Username(){
    return this.signupForm.get('username');
  }

  get FirstName(){
    return this.signupForm.get('firstName');
  }

  get LastName(){
    return this.signupForm.get('lastName');
  }

  addUserForm(){
    this.submitted=false;
    this.signupForm.reset();
  }
}
