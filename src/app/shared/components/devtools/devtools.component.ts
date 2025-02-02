import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-screen-size',
  template: `
    <div
      class="inline-flex w-fit items-center justify-center gap-2 rounded-full border bg-background p-2 text-sm"
    >
      <div class="w-8 text-center">
        <div class="w-8 text-center">
          <div class="block sm:hidden">xs</div>
          <div class="hidden sm:block md:hidden">sm</div>
          <div class="hidden md:block lg:hidden">md</div>
          <div class="hidden lg:block xl:hidden">lg</div>
          <div class="hidden xl:block 2xl:hidden">xl</div>
          <div class="hidden 2xl:block">2xl</div>
        </div>
      </div>

      <div>
        <span className="font-semibold">{{ windowWidth() }} px</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenSizeComponent implements OnDestroy {
  destroyed = new Subject<void>();

  windowWidth = signal(window.innerWidth);
  currentScreenSize = signal('');

  windowWidthSubscription = fromEvent(window, 'resize')
    .pipe(takeUntil(this.destroyed))
    .subscribe(() => this.windowWidth.set(window.innerWidth));

  ngOnDestroy() {
    this.windowWidthSubscription.unsubscribe();
    this.destroyed.next();
    this.destroyed.complete();
  }
}

@Component({
  selector: 'app-devtools',
  imports: [CommonModule, ScreenSizeComponent],
  template: `
    <div
      class="fixed bottom-10 right-10 isolate z-[1] transition-all"
      [ngClass]="{ 'bottom-0 translate-y-full': !isVisible() }"
    >
      <button
        class="absolute left-[50%] top-[-50%] z-[-1] size-10 translate-x-[-50%] rounded-full border bg-muted shadow"
        [ngClass]="{ 'translate-y-[10%]': isVisible() }"
        (click)="toggle()"
      >
        <div
          class="m-auto size-6 translate-y-[-25%] rotate-0 transition-all duration-200 active:scale-90"
          [ngClass]="{ 'rotate-180': isVisible() }"
        >
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </button>

      <div
        class="inline-flex w-fit items-center justify-center gap-2 rounded-full border bg-background p-2 text-sm"
      >
        <app-screen-size />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevtoolsComponent {
  isVisible = signal(false);

  toggle() {
    this.isVisible.set(!this.isVisible());
  }
}
