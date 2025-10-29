import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { About } from '../features/about/about';
import { Login } from '../features/login/login';
import { Dashboard } from '../features/dashboard/dashboard';
import { Gallery } from '../features/gallery/gallery';
import { Crud } from '../features/crud/crud';
import { Profile } from '../features/profile/profile';
import { authenticationGuard } from './guards/authentication-guard';
import { Logout } from '../features/logout/logout';

export const routes: Routes = [
   
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        title: 'App Home Page',
        component: Home
    },
    {
        path: 'about',
        title: 'About Page',
        component: About
    },
    {
        path: 'login',
        title: 'Login Page',
        component: Login
    },
    {
        path: 'dashboard',
        title: 'Dashboard Page',
        component: Dashboard,
        canActivate: [authenticationGuard]
    },
    {
        path: 'gallery',
        title: 'Gallery Page',
        component: Gallery,
        canActivate: [authenticationGuard]
    },
    {
        path: 'crud',
        title: 'CRUD Page',
        component: Crud,
        canActivate: [authenticationGuard]
    },
    {
        path: 'profile',
        title: 'Profile Page',
        component: Profile,
        canActivate: [authenticationGuard]
    },
    {
        path: 'logout',
        title: 'Logout Page',
        component: Logout,
        canActivate: [authenticationGuard]
    },
    { 
        path: '**', 
        redirectTo: 'home' 
    },
    
];
