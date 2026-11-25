import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MATRIMONY_PROFILES, MatrimonyProfile } from '../profile-data';

@Component({
  selector: 'app-view-profile',
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent implements OnInit {
  profile: MatrimonyProfile | undefined;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const profileId = Number(this.route.snapshot.paramMap.get('id'));
    this.profile = MATRIMONY_PROFILES.find(profile => profile.id === profileId);
  }
}
