import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'completeReport',
        loadChildren: () => import('./completereport/completereport.module').then(module => module.CompleteReportModule)
      },
      {
        path: 'cancelReport',
        loadChildren: () => import('./cancelreport/cancelreport.module').then(module => module.CancelReportModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
