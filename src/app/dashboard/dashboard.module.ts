import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../theme/shared/shared.module';
import {FormsModule } from '@angular/forms';
import {NotificationService} from '../services/notification.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from "ngx-spinner";
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardComponent],
  providers:[NotificationService]
})
export class DashboardModule { }