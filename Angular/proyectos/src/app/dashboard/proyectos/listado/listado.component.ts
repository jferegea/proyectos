
import { CommonModule } from '@angular/common';
import { ListadoAPIService } from './../../../services/listadoAPI.service';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export default class ListadoComponent {

  public ListadoAPIService = inject (ListadoAPIService)


}
