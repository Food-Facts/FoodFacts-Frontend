import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatCardContent,
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchTerm: string = '';

  featuredReports = [
    { title: "Protein Supplements", description: "Comprehensive analysis of top protein powders" },
    { title: "Vitamin D", description: "The impact of Vitamin D on immune health" },
    { title: "Omega-3 Fatty Acids", description: "Benefits and sources of Omega-3s" },
  ];

  onSearchTermChange(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
