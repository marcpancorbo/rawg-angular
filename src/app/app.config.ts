import { ApplicationConfig } from '@angular/core';
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: RouteReuseStrategy,
      useClass: IdRouteReuseStrategy,
    },
  ],
};
