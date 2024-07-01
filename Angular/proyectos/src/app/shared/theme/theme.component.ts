import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  darkTheme = false;

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  onChange(newValue: boolean):void{
    if (newValue){
      this.document.body.classList.add('dark-mode')
    }else{
      this.document.body.classList.remove('dark-mode')
    }

  }

}
