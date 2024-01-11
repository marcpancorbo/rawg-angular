import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { GenreService } from '../../routes/games-page/services/genre.service';
import { take } from 'rxjs';
import { Genre } from '../models/game';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, AsideBarComponent],
  providers: [],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  constructor(private genreService: GenreService) {
    this.getGenres();
  }
  getGenres(): void {
    this.genreService.getGenres().pipe(take(1)).subscribe();
  }
}
