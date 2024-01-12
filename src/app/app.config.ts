import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { IdRouteReuseStrategy } from './core/models/id-route-reuse-strategy';
import { GenreService } from './routes/games-page/services/genre.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './core/services/common/auth.service';

function init(genresService: GenreService) {
  return () => firstValueFrom(genresService.getGenres());
}
function loadUserFromStorage(authService: AuthService) {
  return () => firstValueFrom(authService.getUserFromStorage());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: RouteReuseStrategy,
      useClass: IdRouteReuseStrategy,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [GenreService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserFromStorage,
      deps: [AuthService],
      multi: true,
    },
  ],
};
