import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./public/pages/header/header.component";
import {SidebarComponent} from "./public/pages/sidebar/sidebar.component";
import {SidebarItemComponent} from "./public/pages/sidebar-item/sidebar-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, SidebarItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Food-Facts';
}
