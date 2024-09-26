import { createFeatureSelector, createSelector } from '@ngrx/store';
import {MediaState} from "./media.state";


export const selectMediaState = createFeatureSelector<MediaState>('media');

export const selectAllMedias = createSelector(
  selectMediaState,
  (state: MediaState) => state.medias
);

export const selectMediaLoading = createSelector(
  selectMediaState,
  (state: MediaState) => state.loading
)

export const selectMediaError = createSelector(
  selectMediaState,
  (state: MediaState) => state.error
)

export const selectMediaById = (mediaId: string) =>
  createSelector(
    selectAllMedias,
    (medias) => medias.find((media) => media.title === mediaId)
  );
