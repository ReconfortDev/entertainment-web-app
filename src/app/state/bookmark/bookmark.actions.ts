import { createAction, props } from '@ngrx/store';

export const addBookmark = createAction(
  '[Bookmark] Add Bookmark',
  props<{ bookmark: string }>()
);

export const removeBookmark = createAction(
  '[Bookmark] Remove Bookmark',
  props<{ bookmark: string }>()
);
