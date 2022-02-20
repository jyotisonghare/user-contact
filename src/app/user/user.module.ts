import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    DialogBoxComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModuleModule,
    FormsModule
  ],
  exports: [
    MaterialModuleModule
  ]
})
export class UserModule { }
