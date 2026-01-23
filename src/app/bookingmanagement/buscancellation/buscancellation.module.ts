import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { BusCancellationRoutingModule } from './buscancellation-routing.module';
import { SharedModule } from '../../theme/shared/shared.module';
import { BuscancellationComponent } from './buscancellation.component';
import { NotificationService } from '../../services/notification.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    BusCancellationRoutingModule,
    SharedModule,
    NgSelectModule, NgxSpinnerModule,
    FormsModule, NgxPrintModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [BuscancellationComponent],
  providers: [NotificationService], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BusCancellationModule { }