import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgForOf, CommonModule } from '@angular/common';
import { MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatCardContent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgForOf,
    NgClass,
    MatGridTile
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
