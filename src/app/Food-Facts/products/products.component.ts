import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule] // Añadir FormsModule a los imports
})
export class ProductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:8080/products')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = [...this.products];
      });
  }

  goToNutritionalValue(productId: number) {
    this.router.navigate(['/nutritional-value/${productId}']);
  }

  sortProducts(field: string, order: 'asc' | 'desc') {
    this.filteredProducts.sort((a, b) => {
      if (a[field] < b[field]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
