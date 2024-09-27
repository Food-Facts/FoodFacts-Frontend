import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:3000/products')
      .subscribe(data => {
        this.products = data;
      });
  }
}
