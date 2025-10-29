import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthorizationService } from '../../services/authorization-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatButtonModule, MatCardModule,ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  logInFormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  validAuthentication = signal(true);

  constructor(private authService: AuthorizationService, private router: Router) {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  handleLogin(){

    if(this.logInFormGroup.valid){
      //request login and password from form

      const login = this.logInFormGroup.get('login')?.value;
      const password = this.logInFormGroup.get('password')?.value;

      // validate and navigate if success
      const isAuthenticated = this.authService.login(login!, password!);

      if(isAuthenticated){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.validAuthentication.set(false);
      }
    }
  }
}
