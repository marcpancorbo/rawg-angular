import { Routes } from '@angular/router';
import { GameIdResolver } from '../../core/resolvers/game-id.resolver';

export const gameListRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/game-page/games-page.component').then(
        (m) => m.GamesPageComponent
      ),
  },
  {
    path: 'games/:id',
    resolve: {
      game: GameIdResolver,
    },
    loadComponent: () =>
      import('./pages/game-detail-page/game-detail-page.component').then(
        (m) => m.GameDetailPageComponent
      ),
  },
];
