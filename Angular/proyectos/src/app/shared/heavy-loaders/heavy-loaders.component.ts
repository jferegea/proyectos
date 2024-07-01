import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-heavy-loaders',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './heavy-loaders.component.html',
  styleUrl: './heavy-loaders.component.scss'
})
export class HeavyLoadersComponent {

    constructor(){
      const start = Date.now();
      while( Date.now() - start < 3000 ){}
    }

}
