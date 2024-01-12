import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, finalize, map, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Genre } from '../../../core/models/game';
import { GenresResult } from '../../../core/models/genres';

@Injectable({ providedIn: 'root' })
export class GenreService {
  public $genres: WritableSignal<Genre[]> = signal([]);
  public $loading: WritableSignal<boolean> = signal(false);
  constructor(private httpClient: HttpClient) {}
  getGenres(): Observable<Genre[]> {
    this.$loading.set(true);
    if (this.$genres().length > 0) {
      this.$loading.set(false);
      return of(this.$genres());
    }
    return this.httpClient
      .get<GenresResult>(`${environment.BASE_API_URL}genres`)
      .pipe(
        tap((result) => this.$genres.set(result.results)),
        map((result) => result.results),
        finalize(() => this.$loading.set(false))
      );
  }
}
