import {Component, Input} from '@angular/core';
import { MediaItem } from '../../../models';
import {Store} from "@ngrx/store";
import {updateBookmarkStatus} from "../../../state/media/media.actions";

@Component({
  selector: 'app-treandcard',
  standalone: true,
  imports: [],
  templateUrl: './treandcard.component.html',
  styleUrl: './treandcard.component.css'
})
export class TreandcardComponent {
  @Input() media!: MediaItem;

  constructor(private store: Store) {}

  toggleBookmark() {
    const newBookmarkStatus = !this.media.isBookmarked;
    this.store.dispatch(
      updateBookmarkStatus({ mediaId: this.media.title, isBookmarked: newBookmarkStatus })
    );
  }

}
