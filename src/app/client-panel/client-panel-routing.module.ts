import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDataComponent } from "src/app/client-panel/client-data/client-data.component";
import { UserDeatilsComponent } from "src/app/client-panel/user-deatils/user-deatils.component";

const routes: Routes = [
  {
    path: 'client-panel',
    children: [
      {
        path: '',
        component: ClientDataComponent
      },
      {
        path: 'user-details',
        component: UserDeatilsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPanelRoutingModule { }
