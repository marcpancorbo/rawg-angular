import { DatePipe, NgClass } from '@angular/common';
import { Component, Input, Signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../../core/models/game';
import { User } from '../../core/models/user';
import { AuthService } from '../../core/services/common/auth.service';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [DatePipe, RouterLink, NgClass],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) game: Game;
  $user: Signal<User | null> = this.authService.$user;
  $favourite: Signal<boolean> = computed(() => {
    const favoriteGames =
      this.authService.$user()?.$favouriteGames() ?? new Set();
    return favoriteGames.has(this.game.id);
  });
  constructor(private authService: AuthService) {}

  tooggleFavourite(): void {
    this.$user()?.addGame(this.game);
  }
}
