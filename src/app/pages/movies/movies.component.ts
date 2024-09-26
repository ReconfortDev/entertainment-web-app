import {Component, OnInit} from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";
import {TreandcardComponent} from "../../components/shared/treandcard/treandcard.component";
import {Observable} from "rxjs";
import {MediaList} from "../../models";
import {Store} from "@ngrx/store";
import {selectAllMedias, selectMediaError, selectMediaLoading} from "../../state/media/media.selector";
import {map} from "rxjs/operators";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {loadMedia} from "../../state/media/media.actions";
import {MovieWrapperComponent} from "../../components/movie-wrapper/movie-wrapper.component";
import {SkeletonComponent} from "../../components/shared/moviecard/skeleton/skeleton.component";

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    MoviecardComponent,
    SearchComponent,
    TreandcardComponent,
    AsyncPipe,
    NgForOf,
    MovieWrapperComponent,
    NgIf,
    SkeletonComponent
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent{
  searchResult: any[] = [];
  medias$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {
    this.medias$ = this.store.select(selectAllMedias).pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.category === "Movie"))
    );
    this.loading$ = this.store.select(selectMediaLoading);
    this.error$ = this.store.select(selectMediaError);
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
