import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

declare var gtag: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectos';

  /*constructor( private router: Router){
    const navEndEvents$ = this.router.events
    .pipe(
    filter(event => event instanceof NavigationEnd)
    );  
    
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag ('config', 'G-TBD123BRKY',{
        'page_path': event.urlAfterRedirects
      });
    });

  }*/
}
