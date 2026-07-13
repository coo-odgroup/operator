import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { DeleteUserComponent } from './delete-user.component';
import { DeleteUserRoutingModule } from './delete-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeleteUserRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [DeleteUserComponent],
  providers: [NotificationService],
})
export class DeleteUserModule {}
