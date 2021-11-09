import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import * as firebase from 'firebase';
import { ProgressService } from 'src/app/service/progress.service';
import { Observable, Subject } from 'rxjs';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  private image: any;
  public progress: string = 'pendente';
  public percertProgress: number = 0;
  
  constructor(
    private dataService: DataService,
    private progressService: ProgressService
  ) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user?.email!;
    });
  }

  public post(): void {
    this.dataService.post({
      email: this.email,
      title: this.form.value.title,
      image: this.image[0],
    });

    const follower = interval(1500)
    let cont = new Subject();

    cont.next(true);

    follower
    .pipe(takeUntil(cont))
    .subscribe(() => {
      console.log(this.progressService.state);
      console.log(this.progressService.status);
      this.progress = 'andamento'
      if(this.progressService.status === 'concluido'){
        this.progress = 'concluido';
        cont.next(false);
      }
    })
  }

  public prepareImageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target)!.files;
  }
}
