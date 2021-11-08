import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AcessoComponent } from '../acesso/acesso.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private acesso: AcessoComponent) {}

  public token_id: string = '';

  public saveUser(user: User): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        firebase
          .database()
          .ref(`user_details/${btoa(user.email)}`)
          .set(user);
      });
  }

  public login(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
          });
        this.router.navigate(['/home']);
      });
  }

  public isAuthenticated(): boolean {
    const authCache = localStorage.getItem('idToken');
    if (authCache != null && this.token_id === '') {
      this.token_id = authCache;
    }

    if(this.token_id === ''){
      this.router.navigate(['/'])
    }
    return this.token_id !== '';
  }

  public logout():void{
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('idToken');
      this.token_id = '';
      this.router.navigate(['/']);  
    })

  }
}
