import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() public showPanel : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService
  ) { }

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
  })
  ngOnInit(): void {
  }

  public showCreatePanel(): void {
    this.showPanel.emit(true);
  }

  public get isFormValid(): boolean {
    return this.form.valid
  }

  public login(): void {
    const formValue = this.form.value;
    this.authService.login(formValue.email, formValue.password);
  }
}
