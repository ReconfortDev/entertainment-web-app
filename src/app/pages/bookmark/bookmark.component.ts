import { Component } from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";

@Component({
  selector: 'app-bookmark',
  standalone: true,
    imports: [
        MoviecardComponent,
        SearchComponent
    ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent {
  searchResult: any[] = [];

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
