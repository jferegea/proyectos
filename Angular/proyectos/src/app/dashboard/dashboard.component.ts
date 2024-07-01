import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { SidemenuOcultoComponent } from "../shared/sidemenu-oculto/sidemenu-oculto.component";
import { ThemeComponent } from "../shared/theme/theme.component";




@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [RouterOutlet, SidemenuComponent, SidemenuOcultoComponent, MatIconModule, ThemeComponent,RouterLink]
})
export default class DashboardComponent {

  mostrar = true;

  menuCompleto(){
    this.mostrar = !this.mostrar;
  }

}
