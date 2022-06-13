import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../theme/shared/shared.module';
import { BusManagementRoutingModule } from './busmanagement-routing.module';





@NgModule({
  declarations: [  
  
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    BusManagementRoutingModule
  ]
})
export class BusmanagementModule { }
