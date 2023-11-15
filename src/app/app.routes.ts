import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy load thanks to the loadComponent property
  {
    path: 'home',
    loadComponent: () =>
      import('./core/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then(r => r.ROUTES_PRODUCTS),
  },
  {
    path: 'users-list',
    loadComponent: () =>
      import('./users/users-list/users-list.component').then(c => c.UsersListComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
