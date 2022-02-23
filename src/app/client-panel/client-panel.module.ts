import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataComponent } from './client-data/client-data.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import { ClientPanelRoutingModule } from "src/app/client-panel/client-panel-routing.module";
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    ClientDataComponent,
    UserDeatilsComponent
  ],
  imports: [
    CommonModule,
    ClientPanelRoutingModule,
    SharedModule,
  ]
})
export class ClientPanelModule { }
