import { NavigatorInterface, FooterInterface } from './core/models/Core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rick-and-morty-app';
  public navigator: NavigatorInterface[] = [
    {
      name: 'home',
      link: '/home',
    },
    {
      name: 'characters',
      link: '/characters',
    },{
      name: 'about',
      link: '/about',
    }
  ];
  public footer: FooterInterface = {
    creator: 'Jonathan Mostajo',
    from: 'Upgrade Hub',
  };
}
