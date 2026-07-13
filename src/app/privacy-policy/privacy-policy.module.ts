import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [PrivacyPolicyComponent],
  providers: [NotificationService],
})
export class PrivacyPolicyModule {}
