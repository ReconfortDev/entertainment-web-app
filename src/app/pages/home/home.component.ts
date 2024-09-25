import {Component, OnInit} from '@angular/core';
import {SearchComponent} from '../../components/shared/search/search.component';
import {TreandcardComponent} from "../../components/shared/treandcard/treandcard.component";
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";

import {Store} from '@ngrx/store';
import {loadMedia} from "../../state/media/media.actions";
import {
  selectAllMedias,
  selectMediaLoading,
  selectMediaError,
} from "../../state/media/media.selector";
import {Observable} from "rxjs";
import {MediaList} from "../../models";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TreandcardComponent, MoviecardComponent, NgForOf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchResult: any[] = [];
  medias$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {
    this.medias$ = this.store.select(selectAllMedias);
    this.loading$ = this.store.select(selectMediaLoading);
    this.error$ = this.store.select(selectMediaError);
  }

  ngOnInit() {
    this.store.dispatch(loadMedia())
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
