import { Routes } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';

export const routes: Routes = [
    { path: 'productos', component: ProductTableComponent },
    { path: '', redirectTo: '/productos', pathMatch: 'full' },
];
