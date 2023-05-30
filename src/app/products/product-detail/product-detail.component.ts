import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.redirectNotFound();
    }

    this.productService.getProduct(id).subscribe({
      next: (item) => {
        if (!item) {
          this.redirectNotFound();
        }
        this.product = item;
      },
      error: (err) => {
        console.log('err: ', err);
        this.redirectNotFound();
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  redirectNotFound() {
    this.router.navigate(['/404']);
  }
}
