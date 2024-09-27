import {createReducer, on} from '@ngrx/store';
import {
  signUp,
  signUpSuccess,
  signUpFailure,
  signIn,
  signInSuccess,
  signInFailure,
  loadUsers,
  loadUsersSuccess, loadUsersFailure
} from "./auth.actions";
import {AuthState, initialAuthState} from "./auth.state";

export const authReducer = createReducer(
  initialAuthState,

  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadUsersSuccess, (state, {users}) => ({
    ...state,
    loading: false,
    users,
    error: null,
  })),

  on(loadUsersFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  })),

  // Signup
  on(signUp, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(signUpSuccess, (state, {user}) => ({
    ...state,
    loading: false,
    users: [...state.users, user],
    error: null,
  })),

  on(signUpFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),

  //Sign in
  on(signIn, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(signInSuccess, (state, {user}) => ({
    ...state,
    loading: false,
    user:user,
    error: null,
  })),

  on(signInFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
)
