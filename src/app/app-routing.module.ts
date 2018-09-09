import { Routes } from '@angular/router';
import { StarUpPage } from './pages/star-up/star-up.pages';
//import { PostsComponent } from 'src/app/posts/posts.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PrincipalComponent } from './pages/principal/principal.component';

export const routes: Routes = [
  {
    path: 'startup',
    component: StarUpPage,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: '/startup/login', pathMatch: 'prefix' },
      { path: '**', redirectTo: '/startup/login', pathMatch: 'prefix' },
    ]
  },
  {
    path: 'principal',
    component: PrincipalComponent,
},
  { path: '', redirectTo: '/startup/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/startup/login', pathMatch: 'full' },
];
