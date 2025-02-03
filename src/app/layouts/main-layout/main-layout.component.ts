import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, TopbarComponent, SidebarComponent],
  template: `
    <div class="app-layout">
      <app-topbar class="topbar-area" />
      <app-sidebar class="sidebar-area" />
      <main class="main-area">
        <router-outlet />
      </main>
    </div>
  `,
  styleUrl: './main-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
