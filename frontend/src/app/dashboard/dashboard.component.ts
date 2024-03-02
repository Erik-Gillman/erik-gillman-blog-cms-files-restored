import {Component, OnInit} from '@angular/core';
import {Posts} from "./posts";
import {selectUserName} from "../_store/user-feature/user.selector";
import {Store} from "@ngrx/store";
import {async} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(private store: Store) {
  }
  public currUserName = this.store.select(selectUserName)
  public test(){
    const name = this.currUserName.pipe()
    console.log(name)
  }
}
