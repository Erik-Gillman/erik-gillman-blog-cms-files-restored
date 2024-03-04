import {Component, OnInit} from '@angular/core';
import {Posts} from "../posts/posts";
import {selectIsLogged, selectUserId, selectUserName} from "../_store/user-feature/user.selector";
import {select, Store} from "@ngrx/store";
import {async, Observable} from "rxjs";
import {UserState} from "../_store/user-feature/user.model";
import {UserActions} from "../_store/user-feature/user.actions";
import {PostService} from "../posts/post.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public loggedIn$ = this.store.select(selectIsLogged)
  public posts: Posts[] = []
  constructor(private store: Store, private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  public getPosts() {
    this.postService.getPosts().subscribe(
      (response: Posts[]) => {
        this.posts = response.reverse()
      }
    )
  }
  public logout(){
    this.store.dispatch(UserActions.userInfoChange({userName: "", userId: 0, isLogged: false}))
  }

}
