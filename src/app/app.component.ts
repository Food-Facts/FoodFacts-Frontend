import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./public/pages/header/header.component";
import { SidebarComponent } from "./public/pages/sidebar/sidebar.component";
import { SidebarItemComponent } from "./public/pages/sidebar-item/sidebar-item.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, SidebarItemComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food-Facts';

  constructor(private router: Router) {}

  showSidebar(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/register';
  }
}
