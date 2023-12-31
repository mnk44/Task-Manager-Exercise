import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
    idUser: number;
    newUser!: User;

    constructor() {
        this.idUser = 0;
    }

    recordNewUser(email: string, user_name: string, password: string){
        this.newUser = {
            id: this.idUser,
            email: email,
            user_name: user_name,
            password: password
        }

        localStorage.setItem( email, JSON.stringify(this.newUser));

        this.idUser++;
        console.log(this.idUser);
    }
}
