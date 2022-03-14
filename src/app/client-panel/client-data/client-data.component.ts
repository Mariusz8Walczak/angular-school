import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss']
})
export class ClientDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public addLoginCookie(): void{
    localStorage.setItem('login','1');
  }

  public isLoginVisible(): boolean{
    const isLogin = localStorage.getItem('login');

    if(isLogin && isLogin==='1') {
      return false;
    } else {
      return true;
    }
  }

  public removeLoginCookie(): void{
    localStorage.removeItem('login');
  }

}
