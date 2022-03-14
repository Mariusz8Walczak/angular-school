import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDataComponent } from "src/app/client-panel/client-data/client-data.component";
import { UserDeatilsComponent } from "src/app/client-panel/user-deatils/user-deatils.component";
import { UserPanelGuard } from "src/app/shared/guards/user-panel.guard";
import { ClientDataWithParameterComponent } from "src/app/client-panel/client-data-with-parameter/client-data-with-parameter.component";

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
        component: UserDeatilsComponent,
        canActivate: [UserPanelGuard]
      },
      {
        path: 'user-details/:id',
        component: ClientDataWithParameterComponent,
        canActivate: [UserPanelGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPanelRoutingModule { }
