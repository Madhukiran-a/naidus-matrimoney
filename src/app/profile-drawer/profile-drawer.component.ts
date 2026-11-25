import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatrimonyProfile } from '../profile-data';

@Component({
  selector: 'app-profile-drawer',
  imports: [CommonModule],
  templateUrl: './profile-drawer.component.html',
  styleUrl: './profile-drawer.component.css'
})
export class ProfileDrawerComponent {
  @Input({ required: true }) profile!: MatrimonyProfile;
  @Output() readonly closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
  constructor() {

  }
}
