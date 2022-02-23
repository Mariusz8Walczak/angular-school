import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RatioButtonComponent } from './ratio-button/ratio-button.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    InputComponent,
    RatioButtonComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InputComponent,
    RatioButtonComponent,
    TopMenuComponent
  ]
})
export class SharedModule { }
