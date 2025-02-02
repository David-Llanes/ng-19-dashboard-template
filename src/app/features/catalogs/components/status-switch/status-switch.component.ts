import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status-switch',
  imports: [],
  templateUrl: './status-switch.component.html',
  styleUrl: './status-switch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusSwitchComponent {}
