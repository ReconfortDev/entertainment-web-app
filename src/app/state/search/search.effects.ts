import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MediaService} from '../../services/media/media.service';
import {search, searchSuccess, searchFailure} from './search.actions';

@Injectable()
export class SearchEffects {

  constructor(
    private actions$: Actions,
    private mediaService: MediaService
  ) {
  }

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(search),
      mergeMap(action =>
        this.mediaService.search(action.query).pipe(
          map(medias => searchSuccess({medias})),
          catchError(error => of(searchFailure({error})))
        )
      )
    )
  );
}
