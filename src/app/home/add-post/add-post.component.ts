import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public email: string = '';
  public form: FormGroup = new FormGroup({
    title: new FormControl(null),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user?.email!;
      console.log(user);
    });
  }

  public post(): void {
    this.dataService.post({
      email: this.email,
      title: this.form.value.title,
    });
  }
}
