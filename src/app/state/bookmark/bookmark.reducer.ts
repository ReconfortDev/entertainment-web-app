import { createReducer, on } from '@ngrx/store';
import { addBookmark, removeBookmark } from './bookmark.actions';
import { BookmarkState, initialBookmarkState } from './bookmark.state';

export const bookmarkReducer = createReducer(
  initialBookmarkState,

  // add bookmark action
  on(addBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark],
  })),

  // remove bookmark action
  on(removeBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: state.bookmarks.filter((b) => b !== bookmark),
  }))
);