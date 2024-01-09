import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { gameListRoutes } from './routes/games-page/game-list.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [...gameListRoutes],
  },
];
