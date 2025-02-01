import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet />
    <h1 class="text-red-500">Hola</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
