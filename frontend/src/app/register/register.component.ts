import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService){}
  public createUser(){
    const user = document.getElementById('userName') as HTMLInputElement
    const userName = user?.value
    const passwordEntry = document.getElementById('passWord') as HTMLInputElement
    const password = passwordEntry?.value
    let newUser : Users = {userName: userName, password: password}
    this.userService.addUser(newUser).subscribe(
    (response: Users) => {
    alert("success");},
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    );

  }
}
