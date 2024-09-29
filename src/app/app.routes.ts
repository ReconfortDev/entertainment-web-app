import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { BookmarkComponent } from './pages/bookmark/bookmark.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import {AuthGuard} from "./utils/AuthGuard";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'media', component: MoviesComponent },
  { path: 'tv-series', component: SeriesComponent },
  { path: 'bookmark', component: BookmarkComponent , canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
