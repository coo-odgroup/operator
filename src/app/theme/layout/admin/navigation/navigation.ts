import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const OperatorItems =[{
  id: 'odbus',
  title: '',
  type: 'group',
  icon: 'feather icon-home',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboards',
    
      type: 'item',
      icon: 'feather icon-home',
      url: 'dashboard'
    },
    {
      id: 'completerepor',
      title: 'Booking Report',
    
      type: 'item',
      icon: 'feather icon-list',
      url: 'reports/completeReport'
    },
    {
      id: 'BusCancellation',
      title: 'Bus Cancellation',
      type: 'item',
      icon:'feather icon-x-square',
      url: 'bookingmanagement/buscancellation'
    },
    {
      id: 'seatBlock',
      title: 'Seat  Block',
      type: 'item',
      icon:'feather icon-slash',
      url: 'bookingmanagement/seatblock'
    },
    {
      id: 'seatopen',
      title: 'Seat Open',
      type: 'item',
      icon:'feather icon-book',
      url: 'bookingmanagement/seatopen'
    },
    {
      id: 'extraseatblock',
      title: 'Extra Seat Block',
      type: 'item',
      icon:'feather icon-plus-square',
      url: 'bookingmanagement/extraseatblock'
    },
    {
      id: 'BusSchedule',
      title: 'Bus Schedule',
      type: 'item',
      icon:'feather icon-calendar',
      url: 'busmanagement/busschedule'
    },
    {
      id: 'Owner Fare',
      title: 'Manage Fare',
      type: 'item',
      icon:'feather icon-layers',
      url: 'bookingmanagement/ownerfare'
    }
  ]
}];

@Injectable()
export class NavigationItem {
  public get() {
    var ROLE_ID = localStorage.getItem("ROLE_ID");
    if(ROLE_ID=="4")
    {
      return OperatorItems;
    }
   
    
  }
}
