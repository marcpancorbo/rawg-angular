import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  BehaviorSubject,
  Subject,
  exhaustMap,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { AbstractGamesPageParams } from '../../core/models/abstract-games-page-params';
import { Game, Genre, SearchResult } from '../../core/models/game';
import { SearchFilters } from '../../core/models/search-filters';
import { GameSearchService } from '../../core/services/common/game-search.service';
import { AutoDestroyService } from '../../core/services/utils/auto-destroy.service';
import { GenreService } from '../../routes/games-page/services/genre.service';
import { GameListComponent } from '../game-list/game-list.component';
import { SpinnerComponent } from '../spinner/spinner.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './abstract-games-page.component.html',
  styleUrl: './abstract-games-page.component.scss',
})
export abstract class AbstractGamesPageComponent implements OnInit {
  protected readonly gamesSearchService: GameSearchService =
    inject(GameSearchService);
  protected readonly genreService: GenreService = inject(GenreService);
  protected readonly destroy$: AutoDestroyService = inject(AutoDestroyService);
  private readonly fb: FormBuilder = inject(FormBuilder);
  $games: WritableSignal<Game[]> = signal([]);
  $genres: Signal<Genre[]> = this.genreService.$genres;
  $loading: Signal<boolean> = this.gamesSearchService.$loading;
  filters$: BehaviorSubject<SearchFilters>;
  scrolled$: Subject<void> = new Subject<void>();
  form: FormGroup;
  defaultSearchFilters: SearchFilters = {
    search: '',
    page_size: 25,
    ordering: '-relevance',
    genres: '',
  };
  componentParams: AbstractGamesPageParams = {
    title: 'Please provide a title',
    showFilters: true,
  };
  constructor() {}

  ngOnInit(): void {
    this.filters$ = new BehaviorSubject<SearchFilters>({
      ...this.defaultSearchFilters,
    });
    if (this.componentParams.showFilters) {
      this.initForm();
    }
    this.subscribeToFiltersChange();
    this.subscribeToQueryChanges();
    this.subscribeToInfiniteScroll();
  }

  initForm(): void {
    this.form = this.fb.group({
      order: [this.defaultSearchFilters.ordering],
      genres: [this.defaultSearchFilters.genres],
    });
    this.subscribeToFormChanges();
  }
  subscribeToFormChanges(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const ordering = this.form.controls['order'].value;
      const genres = this.form.controls['genres'].value;
      this.filters$.next({
        ...this.filters$.getValue(),
        ordering,
        genres,
      });
    });
  }

  subscribeToFiltersChange(): void {
    this.filters$
      .pipe(
        tap(() => this.$games.set([])),
        switchMap((filters: SearchFilters) =>
          this.gamesSearchService.searchGames(filters)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data: SearchResult) => {
        this.$games.set(data.results)
      });
  }
  subscribeToInfiniteScroll(): void {
    this.scrolled$
      .pipe(
        exhaustMap(() => {
          return this.gamesSearchService.nextPage();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data: SearchResult) =>
        this.$games.update((values: Game[]) => {
          return [...values, ...data.results];
        })
      );
  }
  subscribeToQueryChanges(): void {
    this.gamesSearchService.queryString$
      .pipe(takeUntil(this.destroy$))
      .subscribe((query: string) => {
        this.filters$.next({
          ...this.filters$.getValue(),
          search: query,
        });
      });
  }
}
