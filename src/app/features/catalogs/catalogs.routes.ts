import { Routes } from '@angular/router';

export default [
  {
    path: 'allergies',
    loadComponent: () =>
      import('./pages/allergies/allergies.component').then(m => m.AllergiesComponent),
  },
] as Routes;
