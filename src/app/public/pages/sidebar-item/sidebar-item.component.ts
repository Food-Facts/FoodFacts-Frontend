import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    MatIcon
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() active: boolean = false;
  @Input() alert: boolean = false;
  @Input() expanded: boolean;
  @Input() route: string = '';

  constructor(private sidebar: SidebarComponent, private router: Router) {
    this.expanded = sidebar.expanded;
  }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
