import { createReducer, on } from '@ngrx/store';
import { signIn, signOut } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,

  // Handle sign-in action
  on(signIn, (state, { username, token }) => ({
    ...state,
    isAuthenticated: true,
    username: username,
    token: token,
  })),

  // Handle sign-out action
  on(signOut, (state) => ({
    ...state,
    isAuthenticated: false,
    username: null,
    token: null,
  }))
);
