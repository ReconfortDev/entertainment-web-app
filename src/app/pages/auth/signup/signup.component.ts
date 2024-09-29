import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadUsers, signUp, signUpFailure} from "../../../state/auth/auth.actions";
import {Observable, of} from "rxjs";
import {AuthState} from "../../../state/auth/auth.state";
import {AuthService} from "../../../services/auth/auth.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgClass,
    ReactiveFormsModule,
    NgIf, RouterLink, AsyncPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup;
  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;
  isPassword2Focused: boolean = false;
  errorMessage$: Observable<string | null>;
  showErrorMessage = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ auth: AuthState }>,
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator })

    this.errorMessage$ = this.store.select(state => state.auth.error);
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());

    this.errorMessage$.subscribe(error => {
      if (error) {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 3000);
      }
    });
  }

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;

      this.authService.addUser({ email, password }).pipe(
        catchError(error => {
          this.store.dispatch(signUpFailure({ error: error.message }));
          return of(null);
        })
      ).subscribe(user => {
        if (user) {
          this.store.dispatch(signUp({ user }));
          this.router.navigate(['/signin']);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}
