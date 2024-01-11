import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';
import { AbstractGamesPageComponent } from '../../../../shared/abstract-games-page/abstract-games-page.component';
import { AbstractGamesPageParams } from '../../../../core/models/abstract-games-page-params';
import { SearchFilters } from '../../../../core/models/search-filters';

@Component({
  selector: 'app-last-30-days-page',
  standalone: true,
  providers: [AutoDestroyService, DatePipe],
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
  templateUrl:
    '../../../../shared/abstract-games-page/abstract-games-page.component.html',
})
export class Last30DaysPageComponent extends AbstractGamesPageComponent {
  override defaultSearchFilters: SearchFilters = {
    ...this.defaultSearchFilters,
    ordering: '-relevance',
    updated: `${this.datePipe.transform(
      new Date(new Date().setDate(new Date().getDate() - 30)),
      'yyyy-MM-dd'
    )},${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
  };
  override componentParams: AbstractGamesPageParams = {
    ...this.componentParams,
    title: 'Last 30 days',
  };

  constructor(private datePipe: DatePipe) {
    super();
  }
}
