import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';

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
    ],
  },
];
