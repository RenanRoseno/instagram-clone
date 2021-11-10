import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ProgressService } from './progress.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private progressService: ProgressService) {}
  private posts: Array<any> = [];

  public post(post: any): void {
    firebase
      .database()
      .ref(`posts/${btoa(post.email)}`)
      .push({ title: post.title })
      .then((response: any) => {
        let imageName = response.key;
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
      });
  }

  public getPosts(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(`posts/${btoa(email)}`)
        .orderByChild('key')
        .once('value')
        .then((snapshot: any) => {
          snapshot.forEach((element: any) => {
            let post = element.val();
            firebase
              .storage()
              .ref()
              .child(`images/${element.key}`)
              .getDownloadURL()
              .then((url: string) => {
                post.url_image = url;

                firebase
                  .database()
                  .ref(`user_details/${btoa(email)}`)
                  .once('value')
                  .then((snapshot: any) => {
                    post.user_name = snapshot.val().name;
                    this.posts.push(post);
                  });
              });
          });
          resolve(this.posts);
        });
    });
  }
}
