import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInFormVisible = true; 

email: string=" ";
password: string=" ";


  constructor(private userService: UserService) {

    
   }

  ngOnInit(): void {
   
  }
  makeSignInFormVisible()
  {
    this.signInFormVisible = true;
  }

  makeSignUpFormVisible()
  {
    this.signInFormVisible = false;
  }
  login()
  {
    console.log("User tried to login!");
  }
  signup()
  {
    console.log("User tried to sign up!");
  }
}
