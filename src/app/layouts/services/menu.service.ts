import { Injectable } from '@angular/core';

// export interface MenuItem {
//   label: string;
//   isSection?: boolean;
//   icon?: string;
//   routerLink?: string | string[];
//   url?: string;
//   target?: string;
//   class?: string;
//   items?: MenuItem[];
// }

export interface MenuItem {
  key: string;
  routerLink: string;
  isLink?: boolean;
  icon?: string;
  items?: MenuItem[];
}

// AGREGAR LOS INCONOS
// <script src="https://kit.fontawesome.com/92fa578084.js" crossorigin="anonymous"></script>

export const NAVIGATION_ITEMS: MenuItem[] = [
  {
    routerLink: 'admin',
    key: 'admin',
    icon: 'fas fa-user-cog', // Icono de administración
    items: [
      {
        routerLink: 'admin/users',
        key: 'admin-users',
        icon: 'fas fa-users', // Icono de grupo de usuarios
        items: [],
      },
      {
        routerLink: 'admin/organization',
        key: 'admin-organization',
        icon: 'fas fa-sitemap', // Icono de organización
        items: [],
      },
      {
        routerLink: 'admin/laboratory',
        key: 'admin-laboratory',
        icon: 'fas fa-flask', // Icono de laboratorio
        items: [
          {
            routerLink: 'admin/laboratory/analyses',
            key: 'admin-laboratory-analyses',
            isLink: true,
          },
          {
            routerLink: 'admin/laboratory/profiles',
            key: 'admin-laboratory-profiles',
            isLink: true,
          },
        ],
      },
    ],
  },
  {
    routerLink: 'catalogs',
    key: 'catalogs',
    icon: 'fas fa-folder-open', // Icono de catálogo/carpeta
    items: [
      {
        routerLink: 'catalogs/administration-routes',
        key: 'catalogs-administration-routes',
        icon: 'fas fa-map', // Icono de mapa
        isLink: true,
      },
      {
        routerLink: 'catalogs/allergies',
        key: 'catalogs-allergies',
        icon: 'fas fa-hand-dots', // Icono de alergias
        isLink: true,
      },
      {
        routerLink: 'catalogs/bacteria',
        key: 'catalogs-bacteria',
        icon: 'fas fa-bacterium', // Icono de bacteria
        isLink: true,
      },
      {
        routerLink: 'catalogs/blood-types',
        key: 'catalogs-blood-types',
        icon: 'fas fa-tint', // Icono de gota de sangre
        isLink: true,
      },
      {
        routerLink: 'catalogs/data-types',
        key: 'catalogs-data-types',
        icon: 'fas fa-database', // Icono de datos
        isLink: true,
      },
      {
        routerLink: 'catalogs/diagnoses',
        key: 'catalogs-diagnoses',
        icon: 'fas fa-stethoscope', // Icono de diagnóstico
        isLink: true,
      },
      {
        routerLink: 'catalogs/educational-attainments',
        key: 'catalogs-educational-attainments',
        icon: 'fas fa-graduation-cap', // Icono de educación
        isLink: true,
      },
      {
        routerLink: 'catalogs/genders',
        key: 'catalogs-genders',
        icon: 'fas fa-venus-mars', // Icono de géneros
        isLink: true,
      },
      {
        routerLink: 'catalogs/insurance-provider-types',
        key: 'catalogs-insurance-provider-types',
        icon: 'fas fa-shield-alt', // Icono de seguro
        isLink: true,
      },
      {
        routerLink: 'catalogs/insurance-providers',
        key: 'catalogs-insurance-providers',
        icon: 'fas fa-hospital-user', // Icono de proveedor
        isLink: true,
      },
      {
        routerLink: 'catalogs/kinships',
        key: 'catalogs-kinships',
        icon: 'fas fa-people-arrows', // Icono de relaciones familiares
        isLink: true,
      },
      {
        routerLink: 'catalogs/loincs',
        key: 'catalogs-loincs',
        icon: 'fas fa-code', // Icono de código
        isLink: true,
      },
      {
        routerLink: 'catalogs/magnitudes',
        key: 'catalogs-magnitudes',
        icon: 'fas fa-ruler-combined', // Icono de medición
        isLink: true,
      },
      {
        routerLink: 'catalogs/marital-statuses',
        key: 'catalogs-marital-statuses',
        icon: 'fas fa-ring', // Icono de estado civil
        isLink: true,
      },
      {
        routerLink: 'catalogs/measurement-units',
        key: 'catalogs-measurement-units',
        icon: 'fas fa-balance-scale', // Icono de unidades de medida
        isLink: true,
      },
      {
        routerLink: 'catalogs/occupations',
        key: 'catalogs-occupations',
        icon: 'fas fa-briefcase', // Icono de ocupaciones
        isLink: true,
      },
      {
        routerLink: 'catalogs/procedure-types',
        key: 'catalogs-procedure-types',
        icon: 'fas fa-procedures', // Icono de procedimientos médicos
        isLink: true,
      },
      {
        routerLink: 'catalogs/procedures',
        key: 'catalogs-procedures',
        icon: 'fas fa-file-medical', // Icono de documentos médicos
        isLink: true,
      },
      {
        routerLink: 'catalogs/religions',
        key: 'catalogs-religions',
        icon: 'fas fa-pray', // Icono de religión
        isLink: true,
      },
      {
        routerLink: 'catalogs/symptom-types',
        key: 'catalogs-symptom-types',
        icon: 'fas fa-thermometer', // Icono de síntomas
        isLink: true,
      },
      {
        routerLink: 'catalogs/symptoms',
        key: 'catalogs-symptoms',
        icon: 'fas fa-head-side-cough', // Icono de síntomas respiratorios
        isLink: true,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuItems(): MenuItem[] {
    return NAVIGATION_ITEMS;
  }
}
