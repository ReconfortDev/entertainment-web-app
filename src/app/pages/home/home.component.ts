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
import {filter, Observable} from "rxjs";
import {MediaList} from "../../models";
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
export class HomeComponent implements OnInit {
  searchResult: any[] = [];
  medias$: Observable<MediaList>;
  loading$: Observable<boolean>
  error$: Observable<string | null>
  trending$: Observable<MediaList>

  constructor(private store: Store) {
    this.medias$ = this.store.select(selectAllMedias);
    this.loading$ = this.store.select(selectMediaLoading);
    this.error$ = this.store.select(selectMediaError);

    this.trending$ = this.medias$.pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.isTrending))
    );
  }

  ngOnInit() {
    this.store.dispatch(loadMedia())
  }

  handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
}
