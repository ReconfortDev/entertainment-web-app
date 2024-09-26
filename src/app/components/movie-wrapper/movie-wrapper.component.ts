import { Component } from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-movie-wrapper',
  standalone: true,
    imports: [
        NavigationComponent,
        RouterOutlet
    ],
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css'
})
export class MovieWrapperComponent {

}
