import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MenuItem, MenuService } from '@app/layouts/services/menu.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  imports: [MenuItemComponent],
  template: `
    <ul class="menu-container">
      @for (item of items(); track item.key) {
        <app-menu-item [menuItem]="item" />
      }
    </ul>
  `,
  styles: `
    .menu-container {
      padding: 8px;

      white-space: nowrap;
      overflow: hidden;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuService = inject(MenuService);

  items = signal<MenuItem[]>(this.menuService.getMenuItems());
}
