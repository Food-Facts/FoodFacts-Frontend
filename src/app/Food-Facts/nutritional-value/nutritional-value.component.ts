import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nutritional-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutritional-value.component.html',
  styleUrls: ['./nutritional-value.component.css']
})
export class NutritionalValueComponent implements OnInit {
  product: any = {};
  healthrisks: any[] = []; // Add this line to define the healthrisks property

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:8080/api/products/${productId}`).subscribe((data) => {
      this.product = data;
    });
  }

  fetchHealthRisks(healthRiskId: number) {
    this.http.get<any>(`http://localhost:8080/healthRisk/${healthRiskId}`)
      .subscribe(data => {
        this.healthrisks = [data];
      });
  }
}
