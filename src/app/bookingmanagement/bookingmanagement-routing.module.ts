import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buscancellation',
        loadChildren: () => import('./buscancellation/buscancellation.module').then(module => module.BusCancellationModule)
      },    
	    {
        path: 'seatopen',
        loadChildren: () => import('./seatopen/seatopen.module').then(module => module.SeatOpenModule)
      },
      {
        path: 'ownerfare',
        loadChildren: () => import('./ownerfare/ownerfare.module').then(module => module.OwnerFareModule)
      }, 
      {
        path: 'seatblock',
        loadChildren: () => import('./seatblock/seatblock.module').then(module => module.SeatBlockModule)
      },  
      {
        path: 'extraseatblock',
        loadChildren: () => import('./extraseablock/extraseatblock.module').then(module => module.ExtraSeatBlockModule)
      }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingManagementRoutingModule { }
