import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users : any;
  constructor(private rt:Router,private userData : LoginService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password  : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]$"), Validators.minLength(5)])
  })

  get email(){
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password');
  }

  public checkLogin() {
    var username = this.loginForm.get('email')?.value;
    var password = this.loginForm.get('password')?.value;
    var validUser = false;
    this.userData.users().subscribe((data)=>{
      this.users = data;
      for (let entry of this.users) {
        console.log('entry', entry)
        if(username == entry.email && password == entry.password){
          validUser = true;
        }
      }
      if(validUser){
        this.rt.navigate(['/home']);
      }else{
        alert("Invalid Username and password.");
        this.loginForm.reset();
      }

    })


  }

}
