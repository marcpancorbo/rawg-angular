import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AutoDestroyService extends Subject<boolean> implements OnDestroy {
  public ngOnDestroy(): void {
    this.next(true);
    this.complete();
  }
}
