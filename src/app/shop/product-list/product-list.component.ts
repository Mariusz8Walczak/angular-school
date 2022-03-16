import { Component, OnInit } from '@angular/core';
import {ProductsService} from "src/app/shared/services/products.service";
import {Product} from "src/app/shared/models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // @ts-ignore
  public products: Array<Product>;
  // @ts-ignore
  public searchText:string;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.test;
  }

  canSendToBackend(): boolean{
    if(this.searchText && this.searchText.length >3){
      return true;
    } else {
      return false;
    }
  }

}
