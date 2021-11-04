import { Component, OnInit } from '@angular/core';
import * as firebase from '@firebase/app';
import { firebaseConfig } from './utils/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig)
  }
}
