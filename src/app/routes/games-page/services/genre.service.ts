import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { GenresResult } from '../../../core/models/genres';
import { Genre } from '../../../core/models/game';

@Injectable({ providedIn: 'root' })
export class GenreService {
  private genres: Array<Genre> = [];
  constructor(private httpClient: HttpClient) {}
  getGenres(): Observable<Genre[]> {
    if (this.genres.length > 0) {
      return of(this.genres);
    }
    return this.httpClient
      .get<GenresResult>(`${environment.BASE_API_URL}genres`)
      .pipe(
        tap((result) => (this.genres = result.results)),
        map((result) => result.results)
      );
  }
}
