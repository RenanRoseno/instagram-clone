import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('posts') public posts: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.authService.logout();
  }

  public updateTimeLine(): void {
    this.posts.updateTimeLine();
  }
}
