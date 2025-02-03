import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '@app/layouts/services/layout.service';
import { MenuItem } from '@app/layouts/services/menu.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  router = inject(Router);
  layoutService = inject(LayoutService);

  menuItem = input.required<MenuItem>();
  isMenuItemOpen = signal(false);

  // constructor() {
  //   // Si el nodo tiene items[] y la ruta actual contiene la ruta del nodo. Lo abrimos.
  //   effect(() => {
  //     if (
  //       this.layoutService.isDesktopSidebarActive() &&
  //       this.menuItem().items &&
  //       this.menuItem().items!.length
  //     ) {
  //       const currentRoute = this.router.url.startsWith('/')
  //         ? this.router.url.substring(1)
  //         : this.router.url;

  //       if (currentRoute.includes(this.menuItem().routerLink)) {
  //         this.isMenuItemOpen.set(true);
  //       }
  //     }
  //   });
  // }

  toggle(event: MouseEvent) {
    event.stopPropagation();

    // Si estamos en Desktop y el sidebar esta cerrado, lo abrimos.
    if (this.layoutService.isDesktop() && !this.layoutService.isDesktopSidebarOpen()) {
      this.layoutService.onMenuOpen();
      this.isMenuItemOpen.set(true);
      return;
    }

    this.isMenuItemOpen.set(!this.isMenuItemOpen());
  }

  closeAfterClickOnMobile(event: MouseEvent) {
    event.stopPropagation();

    if (this.layoutService.isMobileSidebarOpen() && this.menuItem().isLink) {
      this.layoutService.onMenuClose();
    }
  }

  getSubmenuClass() {
    // Si el MenuItem no esta abierto, no mostramos la clase 'show'
    if (!this.isMenuItemOpen()) return '';

    // Si estamos en Desktop pero esta cerrado, no mostramos la clase 'show'
    if (this.layoutService.isDesktop() && !this.layoutService.isDesktopSidebarOpen()) {
      return '';
    }

    // Los demas casos, si menu item SI ESTA ABIERTO, mostramos la clase 'show':
    // Mobile abierto o cerrado y Desktop abierto.
    return 'show';
  }
}
