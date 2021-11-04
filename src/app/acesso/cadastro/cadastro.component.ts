import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public showLoginPanel: EventEmitter<boolean> = new EventEmitter<boolean>();
  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'name': new FormControl(null, Validators.required),
    'user': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  public showLoginPanelEvent(): void {
    this.showLoginPanel.emit(true);
  }

  public saveUser(): void {
    const formValue = this.form.value;

    const user = new User(
      formValue.email,
      formValue.user,
      formValue.name,
      formValue.password,
    );

    console.log(user)
  }
}
