import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorage } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ FormsModule ]
})

export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(private localStorageService: LocalStorage) {
  }

  logIn(){
    let aux = this.localStorageService.loadUser(this.email, this.password);
    if(aux != undefined){
      
    }
  }
}
