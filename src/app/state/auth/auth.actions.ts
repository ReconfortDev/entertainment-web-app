import { createAction, props } from '@ngrx/store';
import { User } from '../../models/auth';

export const loadUsers = createAction(
  '[User] Load Users'
);
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ user: User }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ user: User }>()
);

export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: string }>()
);

export const signIn = createAction(
  '[Auth] Sign In',
  props<{ user: User }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ user: User }>()
);


export const signInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: string | null }>()
);
