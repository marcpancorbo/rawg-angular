import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/common/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NoUserLoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.$user()) {
      return this.router.parseUrl('/user');
    } else {
      return true;
    }
  }
}