import {Injectable} from '@angular/core';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();

  private user: User;

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: 'user@test.com',
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.handleSuccess();
  }

  login(authData: AuthData) {
    this.user = {
      email: 'user@test.com',
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.handleSuccess();
  }

  private handleSuccess() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }
}
