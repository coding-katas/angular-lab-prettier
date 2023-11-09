import { Routes } from '@angular/router';

export const routes: Routes = [
    // Lazy load thanks to the loadComponent property
    { path: 'home', loadComponent: () => import('./features/home.component')
            .then(c => c.HomeComponent)},
    { path: 'products', loadChildren: () => import('./features/products.routes')
            .then(r => r.ROUTES_PRODUCTS)},
    { path: 'users-list', loadComponent: () => import('./features/users-list.component')
            .then(c => c.UsersListComponent)},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
