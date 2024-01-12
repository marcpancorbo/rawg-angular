import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/games-page/game-list.routes').then(
            (r) => r.GAME_LIST_ROUTES
          ),
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./routes/user/user.routes').then((r) => r.USER_ROUTES),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/auth/auth.routes').then((r) => r.AUTH_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
