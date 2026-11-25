import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { ViewProfileComponent } from './view-profile.component';

describe('ViewProfileComponent', () => {
  async function navigateToProfile(id: string): Promise<RouterTestingHarness> {
    await TestBed.configureTestingModule({
      imports: [ViewProfileComponent],
      providers: [provideRouter([
        { path: 'profile/:id', component: ViewProfileComponent }
      ])]
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/profile/${id}`, ViewProfileComponent);
    return harness;
  }

  it('shows the profile requested by the route id', async () => {
    const harness = await navigateToProfile('2');

    expect(harness.routeNativeElement?.textContent).toContain('roja');
    expect(harness.routeNativeElement?.textContent).toContain('Software Engineer');
  });

  it('shows an unavailable state for an unknown profile id', async () => {
    const harness = await navigateToProfile('999');

    expect(harness.routeNativeElement?.textContent).toContain("We couldn't find that profile.");
  });
});
