import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { BookmarkComponent } from './pages/bookmark/bookmark.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'media', component: MoviesComponent },
  { path: 'tv-series', component: SeriesComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'signing', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
