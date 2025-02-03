import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '@app/layouts/services/layout.service';

@Component({
  selector: 'app-topbar',
  imports: [],
  template: `
    <div class="flex h-[60px] w-full items-center justify-between border-b bg-card px-4">
      <button class="size-8 rounded-lg hover:bg-accent" (click)="toggleSidebar()">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  layoutService = inject(LayoutService);

  toggleSidebar() {
    this.layoutService.onMenuToggle();
  }
}
