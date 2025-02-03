import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {}
