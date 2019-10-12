import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  public navigationLinks = [
    {label: 'Home', url: 'home'},
    {label: 'About', url: 'about'},
    {label: 'Contact', url: 'contact'}
    ];

}
