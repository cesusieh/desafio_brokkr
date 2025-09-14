import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(searchTerm: string = '', sort: string = '', page: number = 1): Observable<ApiResponse> {
    let params = new HttpParams();

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    if (page && page > 0) {
      params = params.set('page', page.toString());
    }

    return this.http.get<ApiResponse>(`${this.apiUrl}/products`, { params });
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}