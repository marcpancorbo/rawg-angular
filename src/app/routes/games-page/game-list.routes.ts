import { Routes } from '@angular/router';
import { GameIdResolver } from '../../core/resolvers/game-id.resolver';
import { GameDetailPageComponent } from './pages/game-detail-page/game-detail-page.component';
import { GamesPageComponent } from './pages/game-page/games-page.component';
import { NewGamesPageComponent } from './pages/new-games-page/new-games-page.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';

export const GAME_LIST_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewGamesPageComponent,
  },
  {
    path: 'games',
    component: GamesPageComponent,
  },
  {
    path: 'games/:id',
    component: GameDetailPageComponent,
    resolve: {
      game: GameIdResolver,
    },
  },

  {
    path: 'genres',
    component: GenresPageComponent,
  },
  {
    path: 'genres/:genre',
    component: GenrePageComponent,
  },
];
