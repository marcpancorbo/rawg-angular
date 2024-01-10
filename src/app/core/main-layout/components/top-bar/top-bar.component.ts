import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoDestroyService } from '../../../services/utils/auto-destroy.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { GameSearchService } from '../../../services/common/game-search.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule],
  providers: [AutoDestroyService],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
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
