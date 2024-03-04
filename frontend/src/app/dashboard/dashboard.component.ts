import {Component, OnInit} from '@angular/core';
import {Posts} from "../posts/posts";
import {selectIsLogged, selectUserId, selectUserName} from "../_store/user-feature/user.selector";
import {select, Store} from "@ngrx/store";
import {async, Observable} from "rxjs";
import {UserState} from "../_store/user-feature/user.model";
import {UserActions} from "../_store/user-feature/user.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  public loggedIn$ = this.store.select(selectIsLogged)

  constructor(private store: Store) {
    //this.loggedIn$ = this.store.pipe(select(selectIsLogged))
  }
  public logout(){
    this.store.dispatch(UserActions.userChange({userName: "", userId: 0, isLogged: false}))
  }

}
