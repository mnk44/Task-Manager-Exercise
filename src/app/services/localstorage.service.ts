import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
    newUser!: User;

    recordNewUser(email: string, user_name: string, password: string) {
        let result = localStorage.getItem(email);

        if(result == null) {
            this.newUser = {
                email: email,
                user_name: user_name,
                password: password
            }
    
            localStorage.setItem( email, JSON.stringify(this.newUser));
        }
        else {
            //insertar modal de error
        }
    }
}
