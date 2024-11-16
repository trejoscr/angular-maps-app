import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  route: string,
  name: string,
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})

export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'Full Screen'
    },
    {
      route: '/maps/zoom-page',
      name: 'Zoom'
    },
    {
      route: '/maps/markers',
      name: 'Markers'
    },
    {
      route: '/maps/properties',
      name: 'Properties'
    },
    {
      route: '/alone',
      name: 'Alone Page'
    }
  ]

}
