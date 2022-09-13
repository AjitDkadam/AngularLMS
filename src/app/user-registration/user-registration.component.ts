import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from './user-registration.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userData : UserRegistrationService) { 
    alert("getting User Data...");
  }

  ngOnInit(): void {
  }

  title = "New User Registration Form"

  getUserFormData(data : any){
    console.warn(data);
    this.userData.saveUser(data).subscribe();
  }

}
