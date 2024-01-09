import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetails } from '../models/game-details';
import { GameService } from '../../routes/games-page/services/game.service';

@Injectable({providedIn: 'root'})
export class GameIdResolver implements Resolve<Observable<GameDetails>> {
  constructor(private gameService: GameService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GameDetails> {
    return this.gameService.getGameById(route.params['id']);
  }
}
