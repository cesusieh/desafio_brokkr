import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: true,
  imports: [CommonModule, SearchBar, RouterModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  private currentSearchTerm: string = '';
  public currentSort: string = '';

  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts(this.currentSearchTerm, this.currentSort, this.currentPage)
      .subscribe(response => {
        this.products = response.products;
        this.totalPages = response.totalPages; 
      });
  }

  onSearch(searchTerm: string): void {
    this.currentSearchTerm = searchTerm.trim();
    this.currentPage = 1;
    this.fetchProducts();
  }

  setSort(newSort: string): void {
    if (this.currentSort === newSort) {
      this.currentSort = '';
    } else {
      this.currentSort = newSort;
    }
    
    this.currentPage = 1;
    this.fetchProducts();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchProducts();
    }
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}