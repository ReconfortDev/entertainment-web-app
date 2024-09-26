import {Component} from '@angular/core';
import {SearchComponent} from '../../components/shared/search/search.component';
import {TreandcardComponent} from "../../components/shared/treandcard/treandcard.component";
import {MoviecardComponent} from "../../components/shared/moviecard/moviecard.component";
import {startWith, Subject} from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import {MediaService} from "../../services/media/media.service";

import {Store} from '@ngrx/store';
import {loadMedia} from "../../state/media/media.actions";
import {
  selectAllMedias,
  selectMediaLoading,
  selectMediaError,
} from "../../state/media/media.selector";
import {Observable} from "rxjs";
import {MediaList, MediaItem} from "../../models";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {map} from "rxjs/operators";
import {MovieWrapperComponent} from "../../components/movie-wrapper/movie-wrapper.component";
import {SkeletonComponent} from "../../components/shared/moviecard/skeleton/skeleton.component";
import {TrendskeletonComponent} from "../../components/shared/treandcard/trendskeleton/trendskeleton.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TreandcardComponent, MoviecardComponent, NgForOf, AsyncPipe, MovieWrapperComponent, NgIf, SkeletonComponent, TrendskeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchResult! : MediaItem[];
  isSearching = false;
  medias$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>
  trending$: Observable<MediaList>

  private searchSubject = new Subject<string>();

  constructor(private store: Store, private mediaService: MediaService) {
    this.medias$ = this.store.select(selectAllMedias);
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

    this.trending$ = this.medias$.pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.isTrending))
    );

  }

  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}
