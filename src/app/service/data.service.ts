import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public post(post: any): void {
    console.log(post)
    firebase.database().ref(`posts/${btoa(post.email)}`)
    .push({title: post.title})
  }
}
