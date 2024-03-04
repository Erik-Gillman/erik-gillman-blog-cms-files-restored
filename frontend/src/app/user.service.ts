import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Users} from "./users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiServerUrl = 'http://localhost:8080'
  constructor(private http: HttpClient){}
  public getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerUrl}/all`)
  }

  public getUser(userName: string): Observable<Users>{
    return this.http.get<Users>(`${this.apiServerUrl}/find/${userName}`)
  }
  public addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiServerUrl}/add`, user)
  }

  public authUser(userName: string, password: string): Observable<Users> {
    return this.http.get<Users>(`${this.apiServerUrl}/auth/${userName}/${password}`)
  }
  public deleteUser(userName: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${userName}`)
  }
}
