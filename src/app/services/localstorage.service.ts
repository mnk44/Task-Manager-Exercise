import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import swal from'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
    auxUser!: User;

    recordNewUser(email: string, user_name: string, password: string): User {
        let result = localStorage.getItem(email);

        if(result == null) {
            this.auxUser = {
                email: email,
                user_name: user_name,
                password: password
            }
    
            localStorage.setItem( email, JSON.stringify(this.auxUser));
            swal.fire('Bienvenido', 'Se ha creado su usuario de manera satisfactoria.', 'success');
        }
        else {
            swal.fire('Correo electrónico existente', 'El correo elctrónico introducido ya esta en uso.', 'error');
        }
        return this.auxUser;
    }

    loadUser(email: string, password: string): User{
        let result = localStorage.getItem(email);

        if(result == null) {
            swal.fire('Credenciales incorrectas', '', 'error');
        }else {
            this.auxUser = JSON.parse(result);
            if(this.auxUser.password != password) {
                swal.fire('Credenciales incorrectas', '', 'error');
            }else {
                swal.fire('Bienvenido', '', 'success');
            }
        }
        return this.auxUser;
    }
}
