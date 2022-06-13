import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: '',
    children: [
      {
        path:'busschedule',
        loadChildren: () => import('./busschedule/busschedule.module').then(module => module.BusScheduleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusManagementRoutingModule { }
