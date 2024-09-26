import {Component, OnInit} from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";
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
  selector: 'app-bookmark',
  standalone: true,
  imports: [
    MoviecardComponent,
    SearchComponent,
    AsyncPipe,
    NgForOf,
    MovieWrapperComponent,
    NgIf,
    SkeletonComponent
  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent implements OnInit{
  searchResult: any[] = [];
  media$: Observable<MediaList>
  movies$: Observable<MediaList>;
  tvSeries$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {

    this.media$ = this.store.select(selectAllMedias).pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.isBookmarked))
    )

    this.movies$ = this.media$.pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.category === "Movie"))
    );
    this.tvSeries$ = this.media$.pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.category === "TV Series"))
    );
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
