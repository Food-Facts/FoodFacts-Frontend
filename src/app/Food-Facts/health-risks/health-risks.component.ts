import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-health-risks',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, CommonModule],
  templateUrl: './health-risks.component.html',
  styleUrl: './health-risks.component.css'
})
export class HealthRisksComponent {
  healthrisks: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchHealthRisks();
  }

  fetchHealthRisks() {
    this.http.get<any[]>('http://localhost:3081/healthrisk')
      .subscribe(data => {
        this.healthrisks = data;
      });
  }
}
