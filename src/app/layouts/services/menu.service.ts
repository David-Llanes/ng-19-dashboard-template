import { Injectable } from '@angular/core';

export interface MenuItem {
  key: string;
  icon?: string;
  routerLink: string;
  isLink?: boolean;
  target?: string;
  items?: MenuItem[];
}

export const NAVIGATION_ITEMS: MenuItem[] = [
  {
    routerLink: 'admin',
    key: 'navigation.admin',
    icon: 'fas fa-user-cog', // Icono de administración
    items: [
      {
        routerLink: 'admin/laboratory',
        key: 'navigation.laboratory',
        icon: 'fas fa-flask', // Icono de laboratorio
        items: [
          {
            routerLink: 'admin/laboratory/analyses',
            key: 'navigation.laboratory-analyses',
            icon: 'fas fa-vial', // Icono de muestra
            isLink: true,
          },
          {
            routerLink: 'admin/laboratory/profiles',
            key: 'navigation.laboratory-profiles',
            icon: 'fas fa-vials', // Icono de muestras
            isLink: true,
          },
        ],
      },
    ],
  },
  {
    routerLink: 'catalogs',
    key: 'navigation.catalogs',
    icon: 'fas fa-folder-open', // Icono de catálogo/carpeta
    items: [
      {
        routerLink: 'catalogs/administration-routes',
        key: 'navigation.catalogs-administration-routes',
        icon: 'fas fa-map', // Icono de mapa
        isLink: true,
      },
      {
        routerLink: 'catalogs/allergies',
        key: 'navigation.catalogs-allergies',
        icon: 'fas fa-hand-dots', // Icono de alergias
        isLink: true,
      },
      {
        routerLink: 'catalogs/bacteria',
        key: 'navigation.catalogs-bacteria',
        icon: 'fas fa-bacterium', // Icono de bacteria
        isLink: true,
      },
      {
        routerLink: 'catalogs/blood-types',
        key: 'navigation.catalogs-blood-types',
        icon: 'fas fa-tint', // Icono de gota de sangre
        isLink: true,
      },
      {
        routerLink: 'catalogs/data-types',
        key: 'navigation.catalogs-data-types',
        icon: 'fas fa-database', // Icono de datos
        isLink: true,
      },
      {
        routerLink: 'catalogs/diagnoses',
        key: 'navigation.catalogs-diagnoses',
        icon: 'fas fa-stethoscope', // Icono de diagnóstico
        isLink: true,
      },
      {
        routerLink: 'catalogs/educational-attainments',
        key: 'navigation.catalogs-educational-attainments',
        icon: 'fas fa-graduation-cap', // Icono de educación
        isLink: true,
      },
      {
        routerLink: 'catalogs/genders',
        key: 'navigation.catalogs-genders',
        icon: 'fas fa-venus-mars', // Icono de géneros
        isLink: true,
      },
      {
        routerLink: 'catalogs/insurance-provider-types',
        key: 'navigation.catalogs-insurance-provider-types',
        icon: 'fas fa-shield-alt', // Icono de seguro
        isLink: true,
      },
      {
        routerLink: 'catalogs/insurance-providers',
        key: 'navigation.catalogs-insurance-providers',
        icon: 'fas fa-hospital-user', // Icono de proveedor
        isLink: true,
      },
      {
        routerLink: 'catalogs/kinships',
        key: 'navigation.catalogs-kinships',
        icon: 'fas fa-people-arrows', // Icono de relaciones familiares
        isLink: true,
      },
      {
        routerLink: 'catalogs/loincs',
        key: 'navigation.catalogs-loincs',
        icon: 'fas fa-code', // Icono de código
        isLink: true,
      },
      {
        routerLink: 'catalogs/magnitudes',
        key: 'navigation.catalogs-magnitudes',
        icon: 'fas fa-ruler-combined', // Icono de medición
        isLink: true,
      },
      {
        routerLink: 'catalogs/marital-statuses',
        key: 'navigation.catalogs-marital-statuses',
        icon: 'fas fa-ring', // Icono de estado civil
        isLink: true,
      },
      {
        routerLink: 'catalogs/measurement-units',
        key: 'navigation.catalogs-measurement-units',
        icon: 'fas fa-balance-scale', // Icono de unidades de medida
        isLink: true,
      },
      {
        routerLink: 'catalogs/occupations',
        key: 'navigation.catalogs-occupations',
        icon: 'fas fa-briefcase', // Icono de ocupaciones
        isLink: true,
      },
      {
        routerLink: 'catalogs/procedure-types',
        key: 'navigation.catalogs-procedure-types',
        icon: 'fas fa-procedures', // Icono de procedimientos médicos
        isLink: true,
      },
      {
        routerLink: 'catalogs/procedures',
        key: 'navigation.catalogs-procedures',
        icon: 'fas fa-file-medical', // Icono de documentos médicos
        isLink: true,
      },
      {
        routerLink: 'catalogs/religions',
        key: 'navigation.catalogs-religions',
        icon: 'fas fa-pray', // Icono de religión
        isLink: true,
      },
      {
        routerLink: 'catalogs/symptom-types',
        key: 'navigation.catalogs-symptom-types',
        icon: 'fas fa-thermometer', // Icono de síntomas
        isLink: true,
      },
      {
        routerLink: 'catalogs/symptoms',
        key: 'navigation.catalogs-symptoms',
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
