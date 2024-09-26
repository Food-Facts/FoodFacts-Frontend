export class Product {
  id: number;
  product: string;
  brand: string;
  image: string;
  category: string;
  ingredients: string[];
  price: number;

  constructor(product: { id?: number, product?: string, brand?: string, image?: string, category?: string, ingredients?: string[], price?: number }) {
    this.id = product.id || 0;
    this.product = product.product || '';
    this.brand = product.brand || '';
    this.image = product.image || '';
    this.category = product.category || '';
    this.ingredients = product.ingredients || [];
    this.price = product.price || 0;
  }
}
