import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userData: FormGroup;
  constructor(private readonly authService: AuthService) {
    this.userData = new FormGroup({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[+0-9\s\-()]*$/),
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
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
      this.authService.signup(this.userData.value);
    } else {
      console.log('not valid');
    }
  }
}
