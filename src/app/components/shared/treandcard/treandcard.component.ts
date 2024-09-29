import {Component, Input} from '@angular/core';
import { MediaItem } from '../../../models';
import {Store} from "@ngrx/store";
import {updateBookmarkStatus} from "../../../state/media/media.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-treandcard',
  standalone: true,
  imports: [],
  templateUrl: './treandcard.component.html',
  styleUrl: './treandcard.component.css'
})
export class TreandcardComponent {
  @Input() media!: MediaItem;

  constructor(private store: Store, private router: Router) {}

  toggleBookmark() {
    const newBookmarkStatus = !this.media.isBookmarked;
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (isAuthenticated) {
      this.store.dispatch(
        updateBookmarkStatus({ mediaId: this.media.title, isBookmarked: newBookmarkStatus })
      );
      this.media.isBookmarked = newBookmarkStatus;
    } else {
      this.router.navigate(['/signin'])
    }
  }

}
