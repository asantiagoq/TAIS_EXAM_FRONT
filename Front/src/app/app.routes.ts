import { Routes } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { IngresosComponent } from './ingresos/ingresos.component';

export const routes: Routes = [
    { path: 'productos', component: ProductTableComponent },
    { path: 'ingresos', component: IngresosComponent },
    { path: '', redirectTo: '/productos', pathMatch: 'full' },
];
