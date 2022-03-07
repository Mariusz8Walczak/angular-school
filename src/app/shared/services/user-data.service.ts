import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { User } from "src/app/shared/models/user";
import {UserService} from "src/app/core/user.service";
import {shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public getUserData(): Observable<User>{
    const user = this.userService.getStorage();
    if (user !== undefined) {
      return of(user);
    } else {
      return this.http.get<any>(`./assets/user.json`).pipe(
        shareReplay(1),
        tap((data: any) => this.userService.setStorage(data))
      )
    }
  }
}
