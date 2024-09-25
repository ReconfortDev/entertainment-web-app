import { Component } from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    MoviecardComponent,
    SearchComponent
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  searchResult: any[] = [];

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
