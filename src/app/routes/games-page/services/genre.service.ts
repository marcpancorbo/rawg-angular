import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Genre } from '../../../core/models/game';
import { GenresResult } from '../../../core/models/genres';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  $genres: WritableSignal<Genre[]> = signal([]);
  constructor(private httpClient: HttpClient) {}
  getGenres(): Observable<GenresResult> {
    return this.httpClient.get<GenresResult>(
      `${environment.BASE_API_URL}genres`
    );
  }
  setGenres(genre: Genre[]): void {
    this.$genres.set(genre);
  }
}
