import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as firebase from '@firebase/auth';
import { ɵAngularFireSchedulers } from '@angular/fire';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public saveUser(user: User): void {
    firebase
      .createUserWithEmailAndPassword(
        firebase.getAuth(),
        user.email,
        user.password
      )
      .then((res) => {
        console.log(res);
      })
      .catch((erro) => console.log(erro));
  }

  public login(email: string, password: string): void {
    firebase
      .signInWithEmailAndPassword(firebase.getAuth(), email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((erro) => console.log(erro));
  }
}
