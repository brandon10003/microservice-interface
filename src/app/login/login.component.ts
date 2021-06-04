import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl,FormGroup} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService) { }

  user: User = new User();
  userArray: Array<User> = new Array<User>();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  loginForm=new FormGroup({
    username:new FormControl(),
  });

  login(login){
    this.user=new User();
    this.user.username=this.Username.value;

    this.user=this.getMatchingUser(this.user.username)
    this.submitted = true;
    this.getUser();
  }

  getMatchingUser(username:String) {
    let matchingUser: User[];

    console.log(this.userservice.getUserList());
    this.userservice.getUserList()
      .subscribe(data => console.log(data), error => console.log(error));
      // .subscribe(result => {
      //   this.userArray = result as User[]
      // })

    console.log(this.userArray);
    matchingUser = this.userArray
        .filter((user) => user.username === username);

    console.log(matchingUser);
    return matchingUser[0]
  }

  getUser() {
    this.userservice.getUser(this.user.userId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  get Username(){
    return this.loginForm.get('username');
  }

  addUserForm(){
    this.submitted=false;
    this.loginForm.reset();
  }

}
