import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LayoutService } from '@app/layouts/services/layout.service';
import { UserInfoComponent } from '@app/shared/components/user-info/user-info.component';
import { MenuComponent } from '../menu/menu.component';
import { CompanyInfoComponent } from '@shared/components/company-info/company-info.component';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MenuComponent, UserInfoComponent, CompanyInfoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  layoutService = inject(LayoutService);

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
    if (this.layoutService.isMobileSidebarOpen()) {
      return 'expanded';
    }
    if (this.layoutService.isDesktopSidebarOpen()) {
      return 'expanded';
    }
    return '';
  });
}
