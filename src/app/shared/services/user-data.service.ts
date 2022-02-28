import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserData(): Observable<User>{
    return this.http.get<User>('./assets/user.json');
  }
}
