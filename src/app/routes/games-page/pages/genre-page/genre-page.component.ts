import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AbstractGamesPageParams } from '../../../../core/models/abstract-games-page-params';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { AbstractGamesPageComponent } from '../../../../shared/abstract-games-page/abstract-games-page.component';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';
import { Genre } from '../../../../core/models/game';
import { Router } from '@angular/router';

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
export class GenrePageComponent
  extends AbstractGamesPageComponent
  implements OnInit
{
  @Input('genre') genre: string;
  override componentParams: AbstractGamesPageParams = {
    title: 'Genre',
  };

  constructor(private router: Router) {
    super();
  }
  override ngOnInit(): void {
    if (
      !this.$genres().find(
        (genre) => genre.name.toLowerCase() === this.genre.toLowerCase()
      )
    ) {
      this.router.navigate(['/']);
    } else {
      this.setParentConfig();
      super.ngOnInit();
    }
  }

  setParentConfig(): void {
    this.componentParams.title =
      this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);

    const genre: Genre = this.$genres().find(
      (genre) => genre.name.toLowerCase() === this.genre.toLowerCase()
    )!;
    this.defaultSearchFilters = {
      ...this.defaultSearchFilters,
      genres: genre.id.toString(),
    };
  }
}
