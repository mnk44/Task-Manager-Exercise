import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
    idUser: number;
    newUser!: User;

    constructor(){
        this.idUser = 0;
    }

    recordNewUser(email: string, user_name: string, password: string){
        this.newUser.id = this.idUser;
        this.newUser.email = email;
        this.newUser.user_name = user_name;
        this.newUser.password = password;

        localStorage.setItem( "user", JSON.stringify(this.newUser));
    }
}
