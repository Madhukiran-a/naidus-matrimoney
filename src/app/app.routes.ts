import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },

    { path: 'findmatches', loadComponent: () => import('./findmatches/findmatches.component').then(m => m.FindmatchesComponent) },
    { path: 'profile/:id', loadComponent: () => import('./view-profile/view-profile.component').then(m => m.ViewProfileComponent) },

    { path: 'aboutus', loadComponent: () => import('./aboutus/aboutus.component').then(m => m.AboutusComponent) },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
    { path: 'profiles', loadComponent: () => import('./profiles/profiles.component').then(m => m.ProfilesComponent) },   

];
