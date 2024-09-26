import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MatIcon} from "@angular/material/icon";

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


  constructor(private sidebar: SidebarComponent) {
    this.expanded = sidebar.expanded;
  }

}

