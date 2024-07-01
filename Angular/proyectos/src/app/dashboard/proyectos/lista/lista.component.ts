import { ListadoAPIService } from './../../../services/listadoAPI.service';
import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export default class ListaComponent {

  private route = inject (ActivatedRoute);
  private ListadoAPIService = inject (ListadoAPIService);

  //public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.ListadoAPIService.getListaById(id))
    )
  )

}
