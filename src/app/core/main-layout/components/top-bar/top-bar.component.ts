import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  take,
  takeUntil,
} from 'rxjs';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/common/auth.service';
import { GameSearchService } from '../../../services/common/game-search.service';
import { AutoDestroyService } from '../../../services/utils/auto-destroy.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  providers: [AutoDestroyService],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @HostListener('document:keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    if (e.altKey && e.key === 'Enter') {
      this.searchInput.nativeElement.focus();
    }
  }
  $user: Signal<User | null> = this.authService.$user;
  query: string = '';
  queryChange$: Subject<string> = new Subject<string>();
  constructor(
    private gameSearchService: GameSearchService,
    private destroy$: AutoDestroyService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.subscribeToInputChanges();
  }
  subscribeToInputChanges() {
    this.queryChange$
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query: string) =>
        this.gameSearchService.setQueryString(query)
      );
  }
  logout(): void {
    this.authService
      .logout()
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['/']));
  }
}
