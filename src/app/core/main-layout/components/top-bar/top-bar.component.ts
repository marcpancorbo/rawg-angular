import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
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
  query: string = '';
  queryChange$: Subject<string> = new Subject<string>();
  constructor(
    private gameSearchService: GameSearchService,
    private destroy$: AutoDestroyService
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
}
