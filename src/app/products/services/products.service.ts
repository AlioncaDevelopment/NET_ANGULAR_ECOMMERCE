import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const url = this.API_URL;
    return this.http.get<Product[]>(url);
  }

  getProduct(productId: number): Observable<Product> {
    const url = this.API_URL + productId;
    return this.http.get<Product>(url);
  }
}