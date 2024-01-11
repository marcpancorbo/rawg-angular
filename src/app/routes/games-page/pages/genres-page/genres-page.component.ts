import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
} from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../../../core/models/game';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres-page',
  standalone: true,
  imports: [SpinnerComponent, RouterLink],
  templateUrl: './genres-page.component.html',
  styleUrl: './genres-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenresPageComponent {
  $loading: Signal<boolean> = this.genreService.$loading;
  $genres: Signal<Genre[]> = this.genreService.$genres;

  constructor(private genreService: GenreService) {}
}
