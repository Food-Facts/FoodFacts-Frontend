import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private http: HttpClient,private router: Router) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:8080/products')
      .subscribe(data => {
        this.products = data;
      });
  }

  goToNutritionalValue(productId: number) {
    this.router.navigate([`/nutritional-value/${productId}`]);
  }

}
