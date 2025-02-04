import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  imports: [],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent {}
