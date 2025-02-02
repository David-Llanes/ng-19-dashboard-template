import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status-column',
  imports: [],
  templateUrl: './status-column.component.html',
  styleUrl: './status-column.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusColumnComponent {}
