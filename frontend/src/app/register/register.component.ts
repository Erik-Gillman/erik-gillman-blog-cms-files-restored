import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";
import {UserActions} from "../_store/user-feature/user.actions";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private store: Store, private router: Router, private route: ActivatedRoute){}
  public createUser(){
    const user = document.getElementById('userName') as HTMLInputElement
    const userName = user?.value
    const passwordEntry = document.getElementById('passWord') as HTMLInputElement
    const password = passwordEntry?.value
    let newUser : Users = {userName: userName, password: password}
    this.userService.addUser(newUser).subscribe(
    (response: Users) => {
      this.store.dispatch(UserActions.userChange({userName: userName, userId: response.id!, isLogged: true}))
      this.router.navigate(['../dashboard'], {relativeTo: this.route});},
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    );

  }
}
