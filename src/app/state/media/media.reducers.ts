import { createReducer, on } from '@ngrx/store';
import { initialState} from "./media.state";
import {loadMedia, loadMediasSuccess, loadMediasFailure} from "./media.actions";

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
  }))
)
