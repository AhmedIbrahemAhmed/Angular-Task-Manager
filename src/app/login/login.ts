import { Component, inject } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
  console.log('Form value:', form.value);
  console.log('Form controls:', form.controls);
  if(form.valid){
      const user = form.value ;
      console.log('User object ready for API:', user);
      this.authService.logIn(user['email'], user['password']).subscribe({
      next: (users) => {
        console.log('Array received from server:', users);
        if(users.length > 0){
          const loggedInUser = users[0];
          this.authService.setLoggedIn(true);
          localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
          
          this.router.navigate(['/home']);
        }
        else{
          console.log("failed to log in")
          alert('Invalid email or password');
        }     
      },
      error: (err) => {
        console.log("failed to log in")
        alert('Invalid email or password');
      }
      });
    }
  }
}
