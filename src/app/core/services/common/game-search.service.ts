import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, Subject, finalize, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { SearchResult } from '../../models/game';
import { SearchFilters } from '../../models/search-filters';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  public $loading: WritableSignal<boolean> = signal(false);
  private queryString: Subject<string> = new Subject<string>();
  public queryString$ = this.queryString.asObservable();
  public nextUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  searchGames(filters: SearchFilters): Observable<SearchResult> {
    this.$loading.set(true);
    let params: HttpParams = new HttpParams({
      fromObject: { ...filters },
    });
    if (!filters.genres) params = params.delete('genres');
    return this.httpClient
      .get<SearchResult>(`${environment.BASE_API_URL}games`, { params })
      .pipe(
        tap((result) => (this.nextUrl = result.next)),
        finalize(() => this.$loading.set(false))
      );
  }
  nextPage(): Observable<SearchResult> {
    this.$loading.set(true);
    return this.httpClient.get<SearchResult>(this.nextUrl).pipe(
      tap((result) => (this.nextUrl = result.next)),
      finalize(() => this.$loading.set(false))
    );
  }

  setQueryString(queryString: string): void {
    this.queryString.next(queryString);
  }
}
