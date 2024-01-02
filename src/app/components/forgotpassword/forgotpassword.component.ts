import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
  standalone: true,
  imports: [ FormsModule ]
})

export class ForgotpasswordComponent {
  email: string = '';
}
