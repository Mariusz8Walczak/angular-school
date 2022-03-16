import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "src/app/shop/product-list/product-list.component";
import { TestResolverResolver } from "src/app/shared/resolver/test-resolver.resolver";

const routes: Routes = [
      {
        path: 'product-list',
        component: ProductListComponent,
        resolve:{test: TestResolverResolver}
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
