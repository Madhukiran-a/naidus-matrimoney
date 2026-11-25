import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, HeaderComponent, RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   contactForm = new FormGroup({
   fullname: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]),
   phonenumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}$/)]),
   emailaddress:new FormControl('', [Validators.required,Validators.email]),
   subject:new FormControl('', [Validators.required,]),
   yourmessage:new FormControl('', [Validators.required,]),

   });

   onsubmit() {
    if (this.contactForm.valid) {
      console.log('contactform Details:', this.contactForm.value);
      alert('contactform submitted successfully!');
    }
  }

}


