import { Routes } from '@angular/router';
import { NoUserLoggedGuard } from '../../core/guards/no-user-logged.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    canActivate: [NoUserLoggedGuard],
    component: LoginPageComponent,
  },
];
