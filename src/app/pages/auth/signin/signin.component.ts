import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {loadUsers, signIn, signInFailure} from '../../../state/auth/auth.actions';
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms'
import {Router, RouterLink} from "@angular/router";
import {AuthState} from "../../../state/auth/auth.state";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  signInForm: FormGroup;
  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;
  error$: Observable<string | null>;
  showError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private store: Store<{ auth: AuthState }>) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
    this.error$ = this.store.pipe(select(state => state.auth.error));
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.store.dispatch(signInFailure({ error: null }));

    this.error$.subscribe(error => {
      if (error) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
          this.store.dispatch(signInFailure({ error: null }));
        }, 3000);
      }
    });
  }

  generateToken(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = '';
    for (let i = 0; i < length; i++){
      token+= chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return token;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.store.dispatch(signIn({ user: { email, password } }));

      this.store.pipe(
        select(state => state.auth.user),
        tap(user => {
          if (user) {
            const token = this.generateToken(16);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/home']);
          } else {
            this.showError = true;
            setTimeout(() => this.showError = false, 3000);
          }
        })
      ).subscribe();
    }
  }
}
