import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  form : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  },
  {
    validators: this.passwordMatches 
  });
  private authService = inject(AuthService);
  private router = inject(Router);


  passwordMatches(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  onSubmit() {
    console.log(this.form);
    if(this.form.valid){
      const rawData = this.form.getRawValue() ;

      const { confirmPassword, ...user } = rawData;
      user.email = user.email.trim();
      user.password = user.password.trim();

      console.log('User object ready for API:', user);
      user.id = uuidv4().split('-')[0];
      this.authService.signUp(user).subscribe({
      next: (res) => {
        this.authService.setLoggedIn(true);

        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert("registration failed check your inputs");
      }
    });
    }
   
  }
}
