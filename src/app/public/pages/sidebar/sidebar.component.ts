import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Input} from '@angular/core';
import {SidebarItemComponent} from "../sidebar-item/sidebar-item.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    MatIcon,
    MatIconButton,
    SidebarItemComponent,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  expanded = true;

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
