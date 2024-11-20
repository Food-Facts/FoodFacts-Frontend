import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-health-risks',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, CommonModule, MatIcon],
  templateUrl: './health-risks.component.html',
  styleUrl: './health-risks.component.css'
})
export class HealthRisksComponent {
  healthrisks: any[] = [];

  constructor(private http: HttpClient) {
    // Proporciona un valor de healthRiskId al llamar al método
    const healthRiskId = 1; // Cambia este valor según sea necesario
    this.fetchHealthRisks(healthRiskId);
  }

  fetchHealthRisks(healthRiskId: number) {
    this.http.get<any>(`http://localhost:8080/healthRisk/${healthRiskId}`)
      .subscribe(data => {
        this.healthrisks = [data];
      });
  }
}
