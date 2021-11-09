import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ProgressService } from './progress.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private progressService: ProgressService) {}

  public post(post: any): void {
    console.log(post);
    let imageName = Date.now();

    firebase
      .storage()
      .ref()
      .child(`images/${imageName}`)
      .put(post.image)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => {
          this.progressService.status = 'andamento';
          this.progressService.state = snapshot;
        },
        (error) => {
          this.progressService.status = 'erro';
        },
        () => {
          this.progressService.status = 'concluido';
        }
      );

    firebase
      .database()
      .ref(`posts/${btoa(post.email)}`)
      .push({ title: post.title });
  }
}
