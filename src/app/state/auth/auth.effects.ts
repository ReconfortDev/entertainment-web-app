import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AuthState} from "./auth.state";
import * as AuthActions from "./auth.actions";
import { catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {loadUsers, loadUsersFailure, loadUsersSuccess, signInFailure, signUp, signUpSuccess} from "./auth.actions";



@Injectable()
export class AuthEffects {

  private actions$ = inject(Actions)
  private authService = inject(AuthService)

  constructor() {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.authService.getUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      mergeMap(action =>
        this.authService.addUser(action.user).pipe(
          map(user => signUpSuccess({ user })),
          catchError(error => of(signInFailure({ error })))
        )
      )
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      mergeMap(({ user }) =>
        this.authService.signIn(user.email, user.password).pipe(
          map((user) => {
            if (user) {
              return AuthActions.signInSuccess({ user });
            } else {
              return AuthActions.signInFailure({ error: 'Invalid email or password' });
            }
          }),
          catchError((error) => of(AuthActions.signInFailure({ error: error.message })))
        )
      )
    )
  );
}
