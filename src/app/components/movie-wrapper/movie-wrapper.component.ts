import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterOutlet} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {loadMedia} from "../../state/media/media.actions";
import {Observable} from "rxjs";
import {MediaList} from "../../models";
import {selectAllMedias} from "../../state/media/media.selector";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-movie-wrapper',
  standalone: true,
    imports: [
        NavigationComponent,
        RouterOutlet
    ],
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.css'
})
export class MovieWrapperComponent implements OnInit{
  medias$: Observable<MediaList>;

  constructor(private store: Store) {
    this.medias$ = this.store.select(selectAllMedias).pipe(
      map((mediaList: MediaList) => mediaList.filter(media => media.isBookmarked))
    );

    this.filterBookmarkedMedia()
  }

  ngOnInit() {
    this.store.dispatch(loadMedia())
  }

  filterBookmarkedMedia() {
    this.medias$.subscribe(MediaItem => {
      localStorage.setItem('bookmarkedMedia', JSON.stringify(MediaItem));
    });
  }

}
