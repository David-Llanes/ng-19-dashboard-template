import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profiles-list',
  imports: [],
  templateUrl: './profiles-list.component.html',
  styleUrl: './profiles-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilesListComponent {}
