import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[Auth] Sign In', props<{ username: string; token: string }>());

export const signOut = createAction('[Auth] Sign Out');