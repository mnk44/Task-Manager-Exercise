import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import swal from'sweetalert2';

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
            swal.fire('Bienvenido', 'Se ha creado su usuario de manera satisfactoria.', 'success');
        }
        else {
            swal.fire('Correo electrónico existente', 'El correo elctrónico introducido ya esta en uso.', 'error');
        }
    }
}
