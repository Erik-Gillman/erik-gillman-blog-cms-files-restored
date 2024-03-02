import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectIsLogged, selectUserId, selectUserName} from "./_store/user-feature/user.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog CMS';
  public currUserName = this.store.select(selectUserName)
  //to access currUserName | async (its called piping look it up)
  public currId = this.store.select(selectUserId)
  public currIsLogged = this.store.select(selectIsLogged)
  constructor(private store: Store){
  }

}
