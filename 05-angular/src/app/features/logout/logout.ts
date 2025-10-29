import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization-service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(private authorizationService: AuthorizationService, private router: Router) {
    if (this.authorizationService.isLoggedIn()) {
      this.authorizationService.logout();
      this.router.navigate(['/home']);
    }
  }
}
