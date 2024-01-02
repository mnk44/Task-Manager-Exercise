import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorage } from 'src/app/services/localstorage.service';

@Component({
  selector: 'sign-up',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [ FormsModule ]
})

export class SignUpComponent {
  email: string = '';
  userName: string = '';
  password: string = '';

  constructor(private localStorageService: LocalStorage) {
  }

  createUser(){
    this.localStorageService.recordNewUser(this.email, this.userName, this.password);
  }
}
