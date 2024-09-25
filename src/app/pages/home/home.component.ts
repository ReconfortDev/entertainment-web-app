import { Component } from '@angular/core';
import { SearchComponent } from '../../components/shared/search/search.component';
import { TreandcardComponent } from "../../components/shared/treandcard/treandcard.component";
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TreandcardComponent, MoviecardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchResult: any[] = [];

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
