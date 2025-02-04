import { Routes } from '@angular/router';

export default [
  {
    path: 'analyses',
    loadComponent: () =>
      import('./pages/analyses-list/analyses-list.component').then(
        m => m.AnalysesListComponent
      ),
  },
  {
    path: 'profiles',
    loadComponent: () =>
      import('./pages/profiles-list/profiles-list.component').then(
        m => m.ProfilesListComponent
      ),
  },
] as Routes;
