import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { User } from "../../models/auth"; // Ensure your User model is defined correctly
import { catchError, map, switchMap } from "rxjs/operators";
import {MediaList} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "/user.json";

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(newUser: User): Observable<User> {
    return this.getUsers().pipe(
      switchMap((users) => {
        const emailExists = users.some(user => user.email === newUser.email);
        if (emailExists) {
          return throwError(() => new Error('Email already exists'));
        }

        users.push(newUser);
        return this.saveUsers(users).pipe(
          map(() => newUser),
          catchError((err) => throwError(() => new Error(err)))
        );
      }),
      catchError((error) => throwError(() => new Error(error)))
    );
  }

  private saveUsers(users: User[]): Observable<void> {
    return this.http.put<void>(this.baseUrl, users).pipe(
      catchError((error) => throwError(() => new Error(error)))
    );
  }


  signIn(email: string, password: string): Observable<User | null> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.email === email && user.password === password) || null),
      catchError(() => of(null))
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && token !== '';
  }
}
