import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NextConfig } from '../../../../app-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public flatConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;

  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor(private router: Router) {
    this.flatConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {}

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

  showSection = true;

  closeMenu() {
    this.showSection = false;
    this.router.navigate(['/dashboard']).then(() => {
      window.location.reload();
    });
  }
}
