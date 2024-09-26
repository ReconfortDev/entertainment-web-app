import {createReducer, on} from '@ngrx/store';
import {initialState} from "./media.state";
import {
  loadMedia,
  loadMediasSuccess,
  loadMediasFailure,
  updateBookmarkStatusSuccess,
  updateBookmarkStatusFailure
} from "./media.actions";

export const mediaReducer = createReducer(
  initialState,
  on(loadMedia, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadMediasSuccess, (state, {medias}) => ({
      ...state,
      medias: [...medias],
      loading: false,
      error: null,
    })
  ),

  on(loadMediasFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  })),

  // Bookmark State
  on(updateBookmarkStatusSuccess, (state, {mediaId, isBookmarked}) => ({
    ...state,
    medias: state.medias.map(media =>
      media.title === mediaId ? {...media, isBookmarked} : media
    )
  })),

  on(updateBookmarkStatusFailure, (state, {error}) => ({
    ...state,
    error
  }))
)
