import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list';
import { ProductDetailComponent} from './pages/product-detail/product-detail'

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent }
];