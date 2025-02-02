import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-allergies',
  imports: [],
  templateUrl: './allergies.component.html',
  styleUrl: './allergies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'page-container' },
})
export class AllergiesComponent {}
