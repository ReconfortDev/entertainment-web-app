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

export const updateBookmarkStatus = createAction(
  '[Media] Update Bookmark Status',
  props<{ mediaId: string; isBookmarked: boolean }>()
);

export const updateBookmarkStatusSuccess = createAction(
  '[Media] Update Bookmark Status Success',
  props<{ mediaId: string; isBookmarked: boolean }>()
);

export const updateBookmarkStatusFailure = createAction(
  '[Media] Update Bookmark Status Failure',
  props<{ error: any }>()
);
