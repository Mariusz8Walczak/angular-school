import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from "src/app/shared/shared.module";
import {ShopRoutingModule} from "src/app/shop/shop-routing.module";



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
