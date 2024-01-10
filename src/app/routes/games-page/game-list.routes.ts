import { Routes } from '@angular/router';
import { GameIdResolver } from '../../core/resolvers/game-id.resolver';
import { GameDetailPageComponent } from './pages/game-detail-page/game-detail-page.component';
import { GamesPageComponent } from './pages/game-page/games-page.component';

export const GAME_LIST_ROUTES: Routes = [
  {
    path: '',
    component: GamesPageComponent,
  },
  {
    path: 'games/:id',
    component: GameDetailPageComponent,
    resolve: {
      game: GameIdResolver,
    },
  },
];
