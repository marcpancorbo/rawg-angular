import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  Signal,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { Subject, merge, switchMap, take, takeUntil, tap } from 'rxjs';
import { Game, Genre } from '../../core/models/game';
import { GameSearchService } from '../../core/services/common/game-search.service';
import { AutoDestroyService } from '../../core/services/utils/auto-destroy.service';
import { GameListComponent } from '../game-list/game-list.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SearchFilters } from '../../core/models/search-filters';
import { NgTemplateOutlet } from '@angular/common';
import { AbstractGamesPageParams } from '../../core/models/abstract-games-page-params';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GenreService } from '../../routes/games-page/services/genre.service';
import { GenresResult } from '../../core/models/genres';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-abstract-games-page',
  standalone: true,
  providers: [],
  imports: [
    GameListComponent,
    SpinnerComponent,
    GameListComponent,
    SpinnerComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
  templateUrl: './abstract-games-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './abstract-games-page.component.scss',
})
export abstract class AbstractGamesPageComponent implements OnInit, OnDestroy {
  private readonly gamesSearchService: GameSearchService =
    inject(GameSearchService);
  private readonly genreService: GenreService = inject(GenreService);
  private readonly destroy$: AutoDestroyService = inject(AutoDestroyService);
  private readonly fb: FormBuilder = inject(FormBuilder);
  $games: Signal<Game[]> = this.gamesSearchService.$games;
  $genres: Signal<Genre[]> = this.genreService.$genres;
  $loading: Signal<boolean> = this.gamesSearchService.$loading;
  onFiltersChange$: Subject<SearchFilters> = new Subject<SearchFilters>();
  form: FormGroup;
  defaultSearchFilters: SearchFilters = {
    search: '',
    page_size: 50,
  };
  componentParams: AbstractGamesPageParams = {
    title: 'Please provide a title',
    showFilters: true,
  };
  constructor() {}
  ngOnInit(): void {
    if (this.componentParams.showFilters) {
      this.initForm();
    }
    this.getGenres();
    this.subscribeToFiltersChange();
    this.subscribeToQueryChanges();
  }
  initForm(): void {
    this.form = this.fb.group({
      order: ['-relevance'],
      genres: [''],
    });
    this.subscribeToFormChanges();
  }
  onScroll(): void {
    this.onFiltersChange$.next(this.defaultSearchFilters);
  }
  subscribeToFiltersChange(): void {
    this.onFiltersChange$
      .pipe(
        switchMap((filters: SearchFilters) =>
          this.gamesSearchService.searchGames(filters)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.gamesSearchService.setNextUrl(data.next);
        this.gamesSearchService.setGames(data.results);
      });
  }
  subscribeToQueryChanges(): void {
    this.gamesSearchService.queryString$
      .pipe(takeUntil(this.destroy$))
      .subscribe((query: string) => {
        this.onFiltersChange$.next({
          ...this.defaultSearchFilters,
          search: query,
        });
      });
  }

  subscribeToFormChanges(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const ordering = this.form.controls['order'].value;
      const genres = this.form.controls['genres'].value;
      this.onFiltersChange$.next({
        ...this.defaultSearchFilters,
        ordering,
        genres,
      });
    });
  }
  getGenres(): void {
    this.genreService
      .getGenres()
      .pipe(take(1))
      .subscribe((genres: GenresResult) =>
        this.genreService.setGenres(genres.results)
      );
  }
  ngOnDestroy(): void {
    this.gamesSearchService.setNextUrl('');
  }
}
