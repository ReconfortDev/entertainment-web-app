import {Component} from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";
import {Observable, of, startWith, Subject} from "rxjs";
import {MediaList} from "../../models";
import {Store} from "@ngrx/store";
import {selectAllMedias, selectMediaError, selectMediaLoading} from "../../state/media/media.selector";
import {map, switchMap} from "rxjs/operators";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MovieWrapperComponent} from "../../components/movie-wrapper/movie-wrapper.component";
import {SkeletonComponent} from "../../components/shared/moviecard/skeleton/skeleton.component";
import {MediaService} from "../../services/media/media.service";

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
export class BookmarkComponent{
  isSearching = false;
  media$: Observable<MediaList>
  movies$: Observable<MediaList>;
  tvSeries$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>

  private searchSubject = new Subject<string>();
  constructor(private store: Store, private mediaService: MediaService) {
    this.media$ = this.loadBookmarkedMedia()

    this.media$ = this.searchSubject.pipe(
      startWith(''),
      switchMap(query => {
        if (query.length > 3) {
          this.isSearching = true;
          return this.mediaService.search(query);
        }
        else if (query === ''){
          this.isSearching = false;
          return this.store.select(selectAllMedias);
        }
        else {
          this.isSearching = false;
          return this.store.select(selectAllMedias);
        }
      })
    );

    this.movies$ = this.media$.pipe(
      map((mediaList: MediaList) => {
        return mediaList.reduce((acc, media) => {
          if (media.category === "Movie") {
            acc.push(media);
          }
          return acc;
        }, [] as MediaList);
      })
    );

    this.tvSeries$ = this.media$.pipe(
      map((mediaList: MediaList) => {
        return mediaList.reduce((acc, media) => {
          if (media.category === "TV Series") {
            acc.push(media);
          }
          return acc;
        }, [] as MediaList);
      })
    );


    this.loading$ = this.store.select(selectMediaLoading);
    this.error$ = this.store.select(selectMediaError);
  }

  loadBookmarkedMedia(): Observable<MediaList> {
    const bookmarkedMedia: MediaList = JSON.parse(localStorage.getItem('bookmarkedMedia') || '[]');
    return Array.isArray(bookmarkedMedia) ? of(bookmarkedMedia) : of([]);
  }

  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}
