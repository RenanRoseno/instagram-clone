import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public saveUser(user: User): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response: any) => {
        firebase
          .database()
          .ref(`user_details/${btoa(user.email)}`)
          .set(user);
      });
  }

  public login(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{}).catch();
    // firebase
    //   .signInWithEmailAndPassword(firebase.getAuth(), email, password)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((erro) => console.log(erro));
  }
}
