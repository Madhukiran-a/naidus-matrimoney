import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MATRIMONY_PROFILES, MatrimonyProfile } from '../profile-data';
import { ProfileDrawerComponent } from '../profile-drawer/profile-drawer.component';

@Component({
  selector: 'app-profiles',
  imports: [HeaderComponent, FooterComponent, CommonModule, ProfileDrawerComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {
  readonly profiles = MATRIMONY_PROFILES;
  selectedProfile: MatrimonyProfile | null = null;

  openProfile(profile: MatrimonyProfile): void {
    console.log(profile)
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
}
