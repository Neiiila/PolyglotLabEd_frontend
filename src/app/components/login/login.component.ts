import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder , private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  logIn(){
    if (this.loginForm.valid) {
      
      console.log(localStorage.getItem('isAuthentificated'));
      const { email, password } = this.loginForm.value;
      localStorage.setItem('email', email);
      localStorage.setItem('isAuthentificated', 'true');
      console.log(localStorage.getItem('isAuthentificated'));
      this.router.navigate(['/']); 
    }
  }
}
