import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Persona } from '../../../services/persona';
import { HeavyLoadersComponent } from "../../../shared/heavy-loaders/heavy-loaders.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { ThemeComponent } from "../../../shared/theme/theme.component";
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-crud',
    standalone: true,
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss',
    imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, HeavyLoadersComponent, MatProgressSpinnerModule, MatSelectModule, MatExpansionModule, ThemeComponent, RouterLink]
})
export default class CrudComponent {

  nombre = '';
  apellidos = '';
  edad = '';
  estadoCivil = '';
  ciudad = '';
  inscrito = '';


  personasArray: Persona[] = [
    {id: 1, nombre: "José", apellidos:"Pérez Martín", edad: 18, estadoCivil: "Soltero", ciudad: "Cádiz", inscrito: "No" },
    {id: 2, nombre: "María", apellidos:"García Casado", edad: 18, estadoCivil: "Soltera", ciudad: "Sevilla", inscrito: "Si" },
    {id: 3, nombre: "Andrés", apellidos:"Castro de la Rosa", edad: 18, estadoCivil: "Casado", ciudad: "Badajoz", inscrito: "No" },
  ];

  selectedPersona: Persona = new Persona();

  borrarDatos(){
    this.nombre = '';
    this.apellidos = '';
    this.edad = '';
    this.estadoCivil = '';
    this.ciudad = '';
    this.inscrito = '';
  }

  agregarEditar(){
    if(this.selectedPersona.id === 0){
      this.selectedPersona.id = this.personasArray.length + 1;
      this.personasArray.push(this.selectedPersona);
    }
      this.selectedPersona = new Persona();
  }

  abrirEditar(persona: Persona){
    this.selectedPersona = persona;
  }

  borrarPersona(){
    if(confirm('¿Estas seguro de eliminarlo?')){
      this.personasArray = this.personasArray.filter(x => x !=this.selectedPersona);
      this.selectedPersona = new Persona();
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }



}
