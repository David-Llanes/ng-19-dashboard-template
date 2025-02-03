import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MediaQueryService } from '@app/core/services/media-query.service';
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
  mediaQueryService = inject(MediaQueryService);

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

    if (
      !this.layoutService.isDesktopSidebarActive() &&
      this.mediaQueryService.isDesktop()
    ) {
      this.layoutService.onMenuOpen();
      this.isMenuItemOpen.set(true);
      return;
    }

    this.isMenuItemOpen.set(!this.isMenuItemOpen());
  }

  closeAfterClickOnMobile(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (
      this.layoutService.isMobileSidebarActive() &&
      !this.mediaQueryService.isDesktop() &&
      this.menuItem().isLink
    ) {
      this.layoutService.onMenuToggle();
    }
  }

  getSubmenuClass() {
    const isDesktopSidebarActive = this.layoutService.isDesktopSidebarActive();
    const isDesktop = this.mediaQueryService.isDesktop();

    // Si esta cerrado, puede permanecer cerrado
    if (!this.isMenuItemOpen()) return '';

    // Si esta abierto y ademas esta activa la sidebar en desktop y estamos en desktop
    if (isDesktopSidebarActive && isDesktop) {
      return 'show';
    }

    // Cuando esta cerrada la navbar pero seguimos en desktop
    if (!isDesktopSidebarActive && isDesktop) {
      return '';
    }

    // Si esta abierto y no estamos en desktop
    return 'show';
  }
}
