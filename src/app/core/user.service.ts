import { Injectable } from '@angular/core';
import {User} from "src/app/shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @ts-ignore
  private user: User

  constructor() {

  }

  public getStorage():User{
      return this.user;
  }

  public setStorage (user:User):void{
    this.user=user;
  }
}
