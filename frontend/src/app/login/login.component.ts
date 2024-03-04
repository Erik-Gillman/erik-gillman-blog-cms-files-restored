import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {UserActions} from "../_store/user-feature/user.actions";
import {ActivatedRoute, Router} from "@angular/router";
import {selectIsLogged} from "../_store/user-feature/user.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private store: Store, private router: Router, private route: ActivatedRoute){}
  public checkLogin(){
    const user = document.getElementById('userName') as HTMLInputElement
    const userName = user?.value
    const passwordEntry = document.getElementById('passWord') as HTMLInputElement
    const password = passwordEntry?.value
    this.userService.authUser(userName, password).subscribe(
      (response: Users) => {
        this.store.dispatch(UserActions.userChange({userName: userName, userId: response.id!, isLogged: true}))
        console.log(this.store.select(selectIsLogged).pipe())
        this.router.navigate(['../dashboard'], {relativeTo: this.route});},
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
