import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ProductsService} from "src/app/shared/services/products.service";
import {Product} from "src/app/shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class TestResolverResolver implements Resolve<Array<Product>> {

  constructor(private productService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Product>> {
    console.log('resolve');
    return this.productService.getProducts();
  }
}
