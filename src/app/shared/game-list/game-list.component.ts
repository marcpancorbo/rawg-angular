import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '../../core/models/game';
import { GameCardComponent } from '../game-card/game-card.component';

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

  onScroll() {
    console.log('scrolled');
  }
}
