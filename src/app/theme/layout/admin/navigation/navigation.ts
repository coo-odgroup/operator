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
      id: 'completerepor',
      title: 'Dashboards',
    
      type: 'item',
      icon: 'feather icon-home',
      url: 'reports/completeReport'
    },
    {
      id: 'BusCancellation',
      title: 'Bus Cancellation',
      type: 'item',
      icon:'feather icon-wifi-off',
      url: 'bookingmanagement/buscancellation'
    },
    {
      id: 'seatBlock',
      title: 'seat  Block',
      type: 'item',
      icon:'feather icon-slash',
      url: 'bookingmanagement/seatblock'
    },
    {
      id: 'seatopen',
      title: 'Seat Open',
      type: 'item',
      icon:'feather icon-shield',
      url: 'bookingmanagement/seatopen'
    },
    {
      id: 'extraseatblock',
      title: 'Extra Seat Block',
      type: 'item',
      icon:'feather icon-pie-chart',
      url: 'bookingmanagement/extraseatblock'
    },
    {
      id: 'BusSchedule',
      title: 'Bus Schedule',
      type: 'item',
      icon:'feather icon-twitter',
      url: 'busmanagement/busschedule'
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
