import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ApiService } from '../api,service';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent,FooterComponent,RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerform = new FormGroup({
    fullname : new FormControl ("", [Validators.required]),
    gender:new FormControl("", [Validators.required]),
    mobilenumber:new FormControl("", [Validators.required]),
    emailaddress:new FormControl("", [Validators.required]),
    dateofbirth:new FormControl("", [Validators.required]),
    location :new FormControl("", [Validators.required]),
    password:new FormControl("", [Validators.required]),
    confirmpassword:new FormControl("", [Validators.required]),
     

  });
  constructor(private Api:ApiService){}

  onsubmit() {
    if (this.registerform.valid) {
      const registerData = this.registerform.value;

      console.log('Sending Data:', registerData);

      this.Api.registerUser(registerData).subscribe({

        next: (response) => {

          console.log('API Response:', response);

          alert('Registration successful!');

          this.registerform.reset();

        },

        error: (error) => {

          console.log('API Error:', error);

          alert('Registration failed!');

        }

      });

    } else {

      this.registerform.markAllAsTouched();

      alert('Please fill all required fields');

    }

  }

}
      

    
  
  






