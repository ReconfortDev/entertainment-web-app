import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {loadMedia} from "./state/media/media.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'entertainment-web-app';


}
