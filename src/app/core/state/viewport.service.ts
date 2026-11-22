import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly isMobile = toSignal(
    this.breakpointObserver.observe(Breakpoints.XSmall).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(Breakpoints.XSmall) },
  );

  readonly isTablet = toSignal(
    this.breakpointObserver.observe(Breakpoints.Small).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(Breakpoints.Small) },
  );

  readonly isDesktop = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((state) => state.matches)),
    {
      initialValue: this.breakpointObserver.isMatched([
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]),
    },
  );
}
