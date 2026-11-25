import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MATRIMONY_PROFILES, MatrimonyProfile } from '../profile-data';
import { ProfileDrawerComponent } from '../profile-drawer/profile-drawer.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-findmatches',
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink, ReactiveFormsModule, ProfileDrawerComponent],
  templateUrl: './findmatches.component.html',
  styleUrl: './findmatches.component.css'
})
export class FindmatchesComponent {
  
  profiles = MATRIMONY_PROFILES;
  selectedProfile: MatrimonyProfile | null = null;

  viewProfile(profile: MatrimonyProfile): void {
    this.selectedProfile = profile;
  }

  closeProfile(): void {
    this.selectedProfile = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProfile) {
      this.closeProfile();
    }
  }
   findmatchesForm = new FormGroup({
   location: new FormControl('', [Validators.required]),
   age: new FormControl('', [Validators.required]),
   education:new FormControl('', [Validators.required]),
   profession:new FormControl('', [Validators.required]),
   
   });

    onsubmit() {
    if (this.findmatchesForm.valid) {
      console.log('Login Details:', this.findmatchesForm.value);
      alert('Login form submitted successfully!');
    }

  }

  
 
}
