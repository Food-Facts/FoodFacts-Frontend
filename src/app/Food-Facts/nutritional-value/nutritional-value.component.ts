import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/products/${productId}`).subscribe((data) => {
      this.product = data;
    });
  }

  isHealthDialogOpen: boolean = false;

  openHealthDialog() {
    this.isHealthDialogOpen = !this.isHealthDialogOpen;
  }
}
