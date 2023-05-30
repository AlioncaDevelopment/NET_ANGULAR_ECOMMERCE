import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  isLoading: boolean = true;
  productsItems!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (item) =>{
        this.productsItems = item;
      },
      error: (err) => console.log('err: ', err),
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
