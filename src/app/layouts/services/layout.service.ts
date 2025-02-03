import { Injectable, effect, signal, computed, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

export const SCREENS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export interface LayoutConfig {
  menuMode?: string;
}

interface LayoutState {
  overlayMenuActive?: boolean;
  staticMenuDesktopActive?: boolean;
  staticMenuMobileActive?: boolean;
}

interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  breakpointObserver = inject(BreakpointObserver);

  _config: LayoutConfig = {
    menuMode: 'static',
  };

  _state: LayoutState = {
    staticMenuDesktopActive: true,
    overlayMenuActive: false,
    staticMenuMobileActive: false,
  };

  layoutConfig = signal<LayoutConfig>(this._config);
  layoutState = signal<LayoutState>(this._state);

  private configUpdate = new Subject<LayoutConfig>();
  private overlayOpen = new Subject<any>();
  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();
  configUpdate$ = this.configUpdate.asObservable();
  overlayOpen$ = this.overlayOpen.asObservable();

  isMobileSidebarActive = computed(
    () =>
      this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive
  );

  isDesktopSidebarActive = computed(
    () =>
      this.layoutState().overlayMenuActive || this.layoutState().staticMenuDesktopActive
  );

  isOpen = computed(() => this.isMobileSidebarActive() || this.isDesktopSidebarActive());

  isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

  transitionComplete = signal<boolean>(false);

  private initialized = false;

  constructor() {
    effect(() => {
      const config = this.layoutConfig();
      if (config) {
        this.onConfigUpdate();
      }
    });

    effect(() => {
      const config = this.layoutConfig();

      if (!this.initialized || !config) {
        this.initialized = true;
        return;
      }
    });
  }

  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update(prev => ({
        ...prev,
        overlayMenuActive: !this.layoutState().overlayMenuActive,
      }));

      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuDesktopActive: !this.layoutState().staticMenuDesktopActive,
      }));
    } else {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuMobileActive: !this.layoutState().staticMenuMobileActive,
      }));

      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  onMenuOpen() {
    if (this.isOverlay()) {
      this.layoutState.update(prev => ({
        ...prev,
        overlayMenuActive: true,
      }));

      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuDesktopActive: true,
      }));
    } else {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuMobileActive: true,
      }));

      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  onMenuClose() {
    if (this.isOverlay()) {
      this.layoutState.update(prev => ({
        ...prev,
        overlayMenuActive: false,
      }));

      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuDesktopActive: false,
      }));
    } else {
      this.layoutState.update(prev => ({
        ...prev,
        staticMenuMobileActive: false,
      }));

      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  isDesktop() {
    return window.innerWidth >= SCREENS['MD'];
  }

  isMobile() {
    return !this.isDesktop();
  }

  onConfigUpdate() {
    this._config = { ...this.layoutConfig() };
    this.configUpdate.next(this.layoutConfig());
  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
