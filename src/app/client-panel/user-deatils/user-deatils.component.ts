import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from "src/app/shared/services/user-data.service";
import { User } from "src/app/shared/models/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.scss']
})
export class UserDeatilsComponent implements OnInit, OnDestroy {

  // @ts-ignore
  public user: User;

  // @ts-ignore
  private userDataServiceSubsctribtion:Subscription;

  constructor(
    private userDataService: UserDataService
  ) {
  }

  ngOnInit(): void {
    this.userDataServiceSubsctribtion = this.userDataService.getUserData().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

  testingEmitter(event:string){
    console.log(event);
  }

  ngOnDestroy() {
    this.userDataServiceSubsctribtion.unsubscribe();
  }

}
