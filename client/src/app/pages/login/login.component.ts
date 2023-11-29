import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userData: FormGroup;
  constructor(private readonly authService: AuthService) {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/),
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.userData.valid) {
      this.authService.login(this.userData.value);
    } else {
      console.log('not valid');
    }
  }
}
