import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes'),
      },
      {
        path: 'catalogs',
        loadChildren: () => import('./features/catalogs/catalogs.routes'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
