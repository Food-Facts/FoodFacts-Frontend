import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  @ViewChild('start', { static: true }) startTemplate!: TemplateRef<any>;
  @ViewChild('end', { static: true }) endTemplate!: TemplateRef<any>;
}

