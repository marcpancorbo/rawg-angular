import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Game, SearchResult } from '../../models/game';
import { SearchFilters } from '../../models/search-filters';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  $games: WritableSignal<Game[]> = signal([]);
  $loading: WritableSignal<boolean> = signal(false);
  private queryString: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public queryString$ = this.queryString.asObservable();
  public nextUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  //TODO reset al cambiar filtros
  searchGames(
    filters: SearchFilters,
  ): Observable<SearchResult> {
    this.$loading.set(true);
    if (this.nextUrl) {
      return this.httpClient
        .get<SearchResult>(this.nextUrl)
        .pipe(finalize(() => this.$loading.set(false)));
    }
    const params = new HttpParams({
      fromObject: { ...filters },
    });
    return this.httpClient
      .get<SearchResult>(environment.BASE_API_URL + 'games', { params })
      .pipe(finalize(() => this.$loading.set(false)));
  }

  setGames(games: Game[]): void {
    this.$games.update((values: Game[]) => {
      return [...values, ...games];
    });
  }
  setNextUrl(nextUrl: string): void {
    this.nextUrl = nextUrl;
  }
  setQueryString(queryString: string): void {
    this.queryString.next(queryString);
  }
}
