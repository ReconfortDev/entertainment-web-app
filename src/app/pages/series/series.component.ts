import {Component, OnInit} from '@angular/core';
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {SearchComponent} from "../../components/shared/search/search.component";
import {Observable, startWith, Subject} from "rxjs";
import {MediaList} from "../../models";
import {Store} from "@ngrx/store";
import {selectAllMedias, selectMediaError, selectMediaLoading} from "../../state/media/media.selector";
import {map, switchMap} from "rxjs/operators";
import {loadMedia} from "../../state/media/media.actions";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MovieWrapperComponent} from "../../components/movie-wrapper/movie-wrapper.component";
import {SkeletonComponent} from "../../components/shared/moviecard/skeleton/skeleton.component";
import {MediaService} from "../../services/media/media.service";

@Component({
  selector: 'app-series',
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
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent{
  isSearching = false;
  medias$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>

  private searchSubject = new Subject<string>();
  constructor(private store: Store, private mediaService: MediaService) {
    this.medias$ = this.store.select(selectAllMedias).pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.category === "TV Series"))
    );
    this.loading$ = this.store.select(selectMediaLoading);
    this.error$ = this.store.select(selectMediaError);

    this.medias$ = this.searchSubject.pipe(
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
  }

  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}
