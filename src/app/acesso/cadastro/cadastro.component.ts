import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @ViewChild('sucessSwal')
  public readonly sucessSwal!: SwalComponent;

  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;

  @Output() public showLoginPanel: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public showLoginPanelEvent(): void {
    this.showLoginPanel.emit(true);
  }

  public saveUser(): void {
    const formValue = this.form.value;

    const user = new User(
      formValue.email,
      formValue.user,
      formValue.name,
      formValue.password
    );

    this.authService.saveUser(user).then(() => {
      this.sucessSwal.fire();
      this.showLoginPanelEvent();
    }).catch((error)=>{
     this.errorSwal.fire();
    });
  }

  public get isFormValid(): boolean {
    return this.form.valid;
  }
}
