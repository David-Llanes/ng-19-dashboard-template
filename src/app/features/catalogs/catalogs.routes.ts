import { Routes } from '@angular/router';

export default [
  {
    path: 'allergies',
    loadComponent: () =>
      import('./pages/allergies/allergies.component').then(m => m.AllergiesComponent),
  },
  {
    path: 'bacteria',
    loadComponent: () =>
      import('./pages/bacteria/bacteria.component').then(m => m.BacteriaComponent),
  },
] as Routes;
