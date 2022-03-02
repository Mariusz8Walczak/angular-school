import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/shared/models/product";
import {filter, map, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Array<Product>>{

    return this.http.get<Array<Product>>('./assets/products.json').pipe(
      map(products => products.filter(product => product.forGender === 'all')),
      tap(products => this.showInConsoleLog(products)),
      take(1)
    );
  }

  private showInConsoleLog(product:Array<Product>): void{
    console.log(product);
  }
}
