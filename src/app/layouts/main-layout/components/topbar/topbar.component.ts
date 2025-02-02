import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '@app/layouts/services/layout.service';

@Component({
  selector: 'app-topbar',
  imports: [],
  template: `
    <div class="h-full w-full bg-card">
      <button (click)="layoutService.onMenuToggle()">Toggle</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  layoutService = inject(LayoutService);
}
