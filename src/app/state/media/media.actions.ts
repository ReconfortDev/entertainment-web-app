import { createAction, props } from '@ngrx/store';
import {MediaList} from "../../models";

export const loadMedia = createAction('[Medias] Load Medias');

export const loadMediasSuccess = createAction(
  '[Medias] Load Medias Success',
  props<{ medias: MediaList }>()
);

export const loadMediasFailure = createAction(
  '[Medias] Load Medias Failure',
  props<{ error: string | null }>()
);
