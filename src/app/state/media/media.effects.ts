import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MediaService} from "../../services/media/media.service";
import {
  loadMedia,
  loadMediasSuccess,
  loadMediasFailure,
  updateBookmarkStatus,
  updateBookmarkStatusFailure, updateBookmarkStatusSuccess
} from "./media.actions";

@Injectable()
export class MediaEffects {
  private actions$= inject(Actions)
  private mediaService= inject(MediaService)

  loadMedias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMedia),
      mergeMap(() =>
        this.mediaService.getMedias().pipe(
          map((medias) => loadMediasSuccess({ medias })),
          catchError((error) => of(loadMediasFailure({ error })))
        )
      )
    )
  );

  updateBookmarkStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBookmarkStatus),
      mergeMap(({ mediaId, isBookmarked }) =>
        this.mediaService.updateBookmarkStatus(mediaId, isBookmarked).pipe(
          map(() => updateBookmarkStatusSuccess({ mediaId, isBookmarked })),
          catchError((error) => of(updateBookmarkStatusFailure({ error })))
        )
      )
    )
  );
}
