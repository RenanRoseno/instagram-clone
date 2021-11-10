import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public email: string = '';
  public posts: any;

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user => {
      this.email = user?.email!;;
      this.updateTimeLine();
    })
  }

  public updateTimeLine(): void {
    this.dataService.getPosts(this.email).then((posts: any) => {
      console.log(posts)
      this.posts = posts;
    })
  }

}
