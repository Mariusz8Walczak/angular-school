import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataComponent } from './client-data/client-data.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import { ClientPanelRoutingModule } from "src/app/client-panel/client-panel-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "src/app/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientDataWithParameterComponent } from './client-data-with-parameter/client-data-with-parameter.component';



@NgModule({
  declarations: [
    ClientDataComponent,
    UserDeatilsComponent,
    ClientDataWithParameterComponent
  ],
  imports: [
    CommonModule,
    ClientPanelRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ClientPanelModule { }
