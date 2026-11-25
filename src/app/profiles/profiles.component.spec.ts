import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let fixture: ComponentFixture<ProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the selected profile details in the side drawer', () => {
    const viewButtons = fixture.nativeElement.querySelectorAll('.view-btn') as NodeListOf<HTMLButtonElement>;
    viewButtons[1].click();
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('[role="dialog"]') as HTMLElement;
    expect(dialog.textContent).toContain('Roja');
    expect(dialog.textContent).toContain('Software Engineer');
    expect(dialog.textContent).toContain('89%');
  });

  it('closes the profile drawer from the close button', () => {
    component.openProfile(component.profiles[0]);
    fixture.detectChanges();

    const closeButton = fixture.nativeElement.querySelector('.close-btn') as HTMLButtonElement;
    closeButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });

  it('closes the profile drawer when the backdrop is clicked', () => {
    component.openProfile(component.profiles[0]);
    fixture.detectChanges();

    const backdrop = fixture.nativeElement.querySelector('.profile-overlay') as HTMLElement;
    backdrop.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });

  it('closes the profile drawer when Escape is pressed', () => {
    component.openProfile(component.profiles[0]);
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });
});
