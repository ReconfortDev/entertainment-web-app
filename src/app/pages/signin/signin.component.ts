import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouteState } from '../../state/routes/route.state';
import { signIn } from '../../state/auth/auth.actions';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor (private store: Store<RouteState>){}

  handleSignIn() {
    this.store.dispatch(signIn({ username: 'JohnDoe', token: 'sample-token' }));
  }

}
