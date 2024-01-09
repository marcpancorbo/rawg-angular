import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../../core/models/game';
import { GameDetails } from '../../../core/models/game-details';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getGameById(id: number): Observable<GameDetails> {
    return this.httpClient.get<GameDetails>(
      `${environment.BASE_API_URL}games/${id}`
    );
  }
}
