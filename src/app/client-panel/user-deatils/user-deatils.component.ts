import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from "src/app/shared/services/user-data.service";
import { User } from "src/app/shared/models/user";
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.scss']
})
export class UserDeatilsComponent implements OnInit, OnDestroy {

  public profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    secondName: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.pattern('[0-9]{1,}'),Validators.min(18), Validators.max(75)]],
    email:['', [Validators.email, Validators.required]]
  });

  // @ts-ignore
  public user: User;

  // @ts-ignore
  private userDataServiceSubsctribtion:Subscription;

  constructor(
    private userDataService: UserDataService,
    private fb: FormBuilder
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

  public submit(){
    if(this.profileForm.valid){
      console.log('fajnie');
    } else {
      alert('nie fajnie');
    }
  }

  ngOnDestroy() {
    this.userDataServiceSubsctribtion.unsubscribe();
  }

}
