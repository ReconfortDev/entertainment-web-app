import { ActionReducerMap } from '@ngrx/store';
import { RouteState } from './route.state';
import { authReducer } from '../auth/auth.reducer';
import { bookmarkReducer } from '../bookmark/bookmark.reducer';

export const routeReducer: ActionReducerMap<RouteState> = {
  auth: authReducer,
  bookmarks: bookmarkReducer,
};
