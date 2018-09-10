import { Routes } from '@angular/router';
//import { PostsComponent } from 'src/app/posts/posts.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/startup/login', pathMatch: 'prefix' },
      { path: '**', redirectTo: '/startup/login', pathMatch: 'prefix' },
    ]
  },
  {
    path: 'post',
    component: AppComponent,
},
  { path: '', redirectTo: '/startup/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/startup/login', pathMatch: 'full' },
];
