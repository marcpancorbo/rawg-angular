import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { takeUntil } from 'rxjs';
import { AbstractGamesPageParams } from '../../../../core/models/abstract-games-page-params';
import { Genre } from '../../../../core/models/game';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { AbstractGamesPageComponent } from '../../../../shared/abstract-games-page/abstract-games-page.component';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-genre-page',
  standalone: true,
  imports: [
    GameListComponent,
    SpinnerComponent,
    GameListComponent,
    SpinnerComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
  providers: [AutoDestroyService],
  templateUrl:
    '../../../../shared/abstract-games-page/abstract-games-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenrePageComponent extends AbstractGamesPageComponent {
  override componentParams: AbstractGamesPageParams = {
    title: '',
    showFilters: false,
  };
  genre: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  override subscribeToFiltersChange(): void {
    this.subscribeToRouteParam();
    super.subscribeToFiltersChange();
  }

  subscribeToRouteParam(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.genre = params['genre'];
      if (
        !this.$genres().find(
          (genre: Genre) =>
            genre.name.toLowerCase() === this.genre.toLowerCase()
        )
      ) {
        this.router.navigate(['/']);
      } else {
        this.componentParams.title =
          this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
        const genreId: string = this.$genres()
          .find(
            (genre) => genre.name.toLowerCase() === this.genre.toLowerCase()
          )!
          .id.toString();
        this.filters$.next({ ...this.defaultSearchFilters, genres: genreId });
      }
    });
  }
}
