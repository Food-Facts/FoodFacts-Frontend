import { Injectable } from '@angular/core';
import { BaseServiceService } from '../../../shared/services/base-service.service';
import { Product } from '../model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseServiceService<Product> {
  constructor() {
    super();
    this.resourceEndPoint = '/products';
  }
}
