import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MediaQueryService } from '@app/core/services/media-query.service';
import { LayoutService } from '@app/layouts/services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  template: `
    @let isSidebarActive = this.layoutService.isSidebarActive();

    <div class="isolate h-full">
      <div
        class="fixed z-10 h-full w-0 overflow-hidden border-r bg-card transition-all md:sticky md:w-[60px]"
        [ngClass]="sidebarClass()"
      >
        Sidebar
      </div>

      @if (isSidebarActive) {
        <div
          class="fixed inset-0 bg-black/50 md:hidden"
          (click)="toggleSidebar()"
          (keypress)="toggleSidebar()"
        ></div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  layoutService = inject(LayoutService);
  mediaQueryService = inject(MediaQueryService);

  toggleSidebar() {
    this.layoutService.onMenuToggle();
  }

  sidebarClass = computed(() => {
    const isBigDevice = this.mediaQueryService.isDesktop();

    if (this.layoutService.isSidebarActive() && !isBigDevice) {
      return 'w-[250px]';
    }
    if (this.layoutService.isDesktopSidebarActive() && isBigDevice) {
      return 'md:w-[251px]';
    }
    return '';
  });
}
