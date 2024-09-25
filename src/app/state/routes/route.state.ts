import { AuthState } from '../auth/auth.state';
import { BookmarkState } from '../bookmark/bookmark.state';

export interface RouteState {
  auth: AuthState;
  bookmarks: BookmarkState;
}