import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
} from '@angular/core';
import { Game } from '../../../../core/models/game';
import { AuthService } from '../../../../core/services/common/auth.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';

@Component({
  selector: 'app-user-library',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLibraryComponent {
  $games: Signal<Game[]> = computed(() => {
    const favoriteGames = this.authService.$user()?.$favouriteGames().values() ?? [];
    return Array.from(favoriteGames);
  });
  constructor(private authService: AuthService) {}
}
