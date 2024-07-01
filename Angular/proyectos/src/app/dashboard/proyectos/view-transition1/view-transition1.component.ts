import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './view-transition1.component.html',
  styleUrl: './view-transition1.component.scss'
})
export default class ViewTransition1Component {

}
