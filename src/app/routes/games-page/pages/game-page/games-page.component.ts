import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs';
import { GameSearchService } from '../../../../core/services/common/game-search.service';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';


@Component({
  selector: 'app-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameListComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss',
})
export class GamesPageComponent implements OnInit {
  $games = this.gamesSearchService.$games;
  constructor(
    private gamesSearchService: GameSearchService,
    private destroy$: AutoDestroyService
  ) {}
  ngOnInit(): void {
    this.gamesSearchService.queryString$
      .pipe(
        switchMap((title: string) =>
          this.gamesSearchService.searchGames(title)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => this.gamesSearchService.setGames(data.results));
  }
}
