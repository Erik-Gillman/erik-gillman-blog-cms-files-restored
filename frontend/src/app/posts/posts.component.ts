import { Component } from '@angular/core';
import {Users} from "../users";
import {UserActions} from "../_store/user-feature/user.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {PostService} from "./post.service";
import {Posts} from "./posts";
import {selectUserId, selectUserName} from "../_store/user-feature/user.selector";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public userId$ = this.store.select(selectUserId)
  public userId = 0

  public userName$ = this.store.select(selectUserName)
  public userName = ""
  constructor(private postService: PostService, private store: Store, private router: Router, private route: ActivatedRoute){
    this.userId$.subscribe(id =>{
      this.userId = id
    })
    this.userName$.subscribe(name =>{
      this.userName = name
    })
  }
  public createPost(){
    const content = document.getElementById("contentEntry") as HTMLInputElement
    const contentEntry = content?.value
    const title = document.getElementById("title") as HTMLInputElement
    const postTitle = title?.value
    const time = new Date()
    let newPost : Posts = {userId: this.userId, title: postTitle, content: contentEntry, createDate: time, lastEdit: time, creator: this.userName}
    this.postService.addPost(newPost).subscribe(
      (response: Posts) => {
        this.router.navigate(['../dashboard'], {relativeTo: this.route});},
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
