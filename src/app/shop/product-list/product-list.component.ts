import { Component, OnInit } from '@angular/core';
import {ProductsService} from "src/app/shared/services/products.service";
import {Product} from "src/app/shared/models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // @ts-ignore
  public products: Array<Product>;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products=products;
    }
    )
  }

}
