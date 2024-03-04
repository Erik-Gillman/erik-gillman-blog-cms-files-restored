import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "./posts";

@Injectable({
  providedIn: 'root'
})
export class PostService{
  private apiServerUrl = 'http://localhost:8080/post'
  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.apiServerUrl}/all`)
  }
  public addPost(post: Posts): Observable<Posts>{
    return this.http.post<Posts>(`${this.apiServerUrl}/add`, post)
  }
  public deletePost(postId: number){
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${postId}`)
  }

  public updatePost(post: Posts){
    return this.http.post<Posts>(`${this.apiServerUrl}/update`, post)
  }
}
