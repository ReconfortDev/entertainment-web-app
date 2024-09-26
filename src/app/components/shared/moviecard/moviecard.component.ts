import {Component, Input} from '@angular/core';
import {MediaItem} from "../../../models";
import {Store} from "@ngrx/store";
import {updateBookmarkStatus} from "../../../state/media/media.actions";

@Component({
  selector: 'app-moviecard',
  standalone: true,
  imports: [],
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.css'
})
export class MoviecardComponent {
  @Input() media!: MediaItem;

  constructor(private store: Store) {}

  toggleBookmark() {
    const newBookmarkStatus = !this.media.isBookmarked;
    this.store.dispatch(
      updateBookmarkStatus({ mediaId: this.media.title, isBookmarked: newBookmarkStatus })
    );
  }

}
