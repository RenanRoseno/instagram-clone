import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import * as firebase from 'firebase';
import { firebaseConfig, heart } from './utils/constants';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private heart = heart;
  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }

  private showConsole(): void {
    const follower = interval(1500);
    follower.subscribe(() => {
      this.heart += '\n';
      //show heart
    });
  }
}
