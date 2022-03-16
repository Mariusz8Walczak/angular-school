import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from "src/app/shared/shared.module";
import {ShopRoutingModule} from "src/app/shop/shop-routing.module";
import {TestResolverResolver} from "src/app/shared/resolver/test-resolver.resolver";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    TestResolverResolver
  ]
})
export class ShopModule { }
