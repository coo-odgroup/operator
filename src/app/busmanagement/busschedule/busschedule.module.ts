import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { BusScheuleRoutingModule } from './busschedule-routing.module';
import { SharedModule } from '../../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusscheduleComponent } from './busschedule.component';
import { NotificationService } from '../../services/notification.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPrintModule } from 'ngx-print';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    BusScheuleRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPrintModule, NgxSpinnerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [BusscheduleComponent],
  providers: [NotificationService]
})
export class BusScheduleModule { }