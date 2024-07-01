import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu-oculto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu-oculto.component.html',
  styleUrl: './sidemenu-oculto.component.scss'
})
export class SidemenuOcultoComponent {
  public menuItems = routes.map ((route) => route.children ?? []).flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))
  .filter(route => !route.path?.includes('2')) ;
}
