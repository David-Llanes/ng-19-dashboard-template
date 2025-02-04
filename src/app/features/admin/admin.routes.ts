import { Routes } from '@angular/router';

export default [
  {
    path: 'laboratory',
    loadChildren: () => import('./laboratory/admin-laboratory.routes'),
  },
] as Routes;
