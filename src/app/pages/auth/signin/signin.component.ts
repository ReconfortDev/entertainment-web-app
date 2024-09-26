import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signIn } from '../../../state/auth/auth.actions';
import {NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms'
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  signInForm: FormGroup;
  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      this.router.navigate(['/home'])
    }
  }


}
