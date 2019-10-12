import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public displayLoader$: Observable<boolean>;

  constructor(private router: Router) {
  }

  public ngOnInit() {
    this.listenOnRouterNavigation();
  }

  private listenOnRouterNavigation() {
    const navigationStart$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        mapTo(true)
      );

    const navigationEnd$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd
          || event instanceof NavigationEnd
          || event instanceof NavigationCancel
          || event instanceof NavigationError
        ),
        mapTo(false)
      );

    this.displayLoader$ = merge(navigationStart$, navigationEnd$);
  }
}
