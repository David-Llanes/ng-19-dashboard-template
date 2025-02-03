import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MediaQueryService } from '@app/core/services/media-query.service';
import { LayoutService } from '@app/layouts/services/layout.service';
import { MenuComponent } from '../menu/menu.component';
import { UserInfoComponent } from '@app/shared/components/user-info/user-info.component';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MenuComponent, UserInfoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  layoutService = inject(LayoutService);
  mediaQueryService = inject(MediaQueryService);

  onCloseSidebar(event: MouseEvent) {
    event.stopPropagation();
    this.layoutService.onMenuClose();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.layoutService.onMenuClose();
    }
  }

  sidebarClass = computed(() => {
    const isDesktop = this.mediaQueryService.isDesktop();

    if (this.layoutService.isMobileSidebarActive() && !isDesktop) {
      return 'expanded';
    }
    if (this.layoutService.isDesktopSidebarActive() && isDesktop) {
      return 'expanded';
    }
    return '';
  });
}
