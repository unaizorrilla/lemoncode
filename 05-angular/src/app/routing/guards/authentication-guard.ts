import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization-service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthorizationService);
  const router = inject(Router);

  return auth.isLoggedIn() || router.createUrlTree(['/login'], { queryParams: { redirectTo: state.url } });
};
