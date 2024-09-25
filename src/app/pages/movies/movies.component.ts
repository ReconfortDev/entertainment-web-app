import { Component } from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";
import {TreandcardComponent} from "../../components/shared/treandcard/treandcard.component";

@Component({
  selector: 'app-movies',
  standalone: true,
    imports: [
        MoviecardComponent,
        SearchComponent,
        TreandcardComponent
    ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  searchResult: any[] = [];

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
