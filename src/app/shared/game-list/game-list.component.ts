import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
} from '@angular/core';
import { Game } from '../../core/models/game';
import { GameCardComponent } from '../game-card/game-card.component';
import { GameSearchService } from '../../core/services/common/game-search.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent {
  @Input({ required: true }) games: Game[] = [];
  $loading: Signal<boolean> = this.searchService.$loading;

  constructor(private searchService: GameSearchService) {}
}
