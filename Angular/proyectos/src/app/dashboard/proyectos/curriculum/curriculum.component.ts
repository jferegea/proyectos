import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-curriculum',
    standalone: true,
    templateUrl: './curriculum.component.html',
    styleUrl: './curriculum.component.scss',
    imports: [MatButtonModule,MatCardModule,RouterLink,RouterModule]
})
export default class CurriculumComponent{

  constructor() {

  }


}


