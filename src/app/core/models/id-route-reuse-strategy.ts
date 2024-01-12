import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
} from '@angular/router';

export class IdRouteReuseStrategy extends BaseRouteReuseStrategy {
  public override shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    const reuse = future.data['reuseComponent'] ?? true;
    return future.routeConfig === curr.routeConfig && reuse;
  }
}
