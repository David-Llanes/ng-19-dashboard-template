import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
      },
      {
        path: 'admin',
        loadChildren: () => import('@app/features/admin/admin.routes'),
      },
      {
        path: 'catalogs',
        loadChildren: () => import('@app/features/catalogs/catalogs.routes'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
