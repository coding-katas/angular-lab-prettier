import { Routes } from '@angular/router';

export const ROUTES_PRODUCTS: Routes = [
  // Lazy load thanks to the loadComponent property
  {
    path: '',
    loadComponent: () =>
      import('./product-view.component').then(c => c.ProductViewComponent),
  },
];
