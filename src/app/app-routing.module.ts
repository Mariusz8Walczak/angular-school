import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "src/app/error-pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client-panel/client-panel.module').then(m => m.ClientPanelModule),
  },
  {
    path: '',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
