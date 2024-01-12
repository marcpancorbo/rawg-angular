import { Route } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserLibraryComponent } from './components/user-library/user-library.component';

export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      {
        path: 'library',
        component: UserLibraryComponent,
      },
      {
        path: '',
        redirectTo: 'library',
        pathMatch: 'full',
      }
    ],
  },
];
