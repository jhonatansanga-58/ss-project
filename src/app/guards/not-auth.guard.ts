import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const NotAuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.roleValue === null && authService.userValue === null)
    return true;
  else
    return router.navigate(['/']);
}
