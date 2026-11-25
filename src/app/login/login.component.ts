import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ApiService } from '../api,service';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)])
  });
  users: any;

  constructor(private Api: ApiService) {
    this.get_data();
  }
  get_data() {
    this.Api.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
  onsubmit() {
    if (this.loginForm.valid) {
      console.log('Login Details:', this.loginForm.value);
      alert('Login form submitted successfully!');
    }
  }

  

}
