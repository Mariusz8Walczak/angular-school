import { Component } from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public counter = [
    1,2,3,4,5,6
  ];

  public name ="T";

  public isShownVar = true;

  public changeName(event: KeyboardEvent):void{
    const inputEvent = event.target as HTMLInputElement
     this.name=inputEvent.value;
  }

  public isShown():boolean {
    return this.isShownVar;
  }

  public toggleIsShown(): void{
    this.isShownVar=!this.isShownVar
  }


}
