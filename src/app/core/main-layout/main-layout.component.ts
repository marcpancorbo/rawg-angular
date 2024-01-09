import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { GameSearchService } from '../services/common/game-search.service';
import { AutoDestroyService } from '../services/utils/auto-destroy.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  providers: [AutoDestroyService],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
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
