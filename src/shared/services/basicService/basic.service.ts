import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver,
  ) { }

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isMedium$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  isXLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  //devices
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTablet: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  public toggle = true;
  Drawer(): boolean {
    if(this.toggle === true) {
      return this.toggle = false;
    }else {
      return this.toggle = true;
    }
  }

  public dark = false;
  darkMode(): void {
    document.body.classList.toggle('darkmode');
  }

  onLinkClick(link: string): any{
    return window.location.href = link;
  }

}
