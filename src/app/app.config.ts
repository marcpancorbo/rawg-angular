import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
