import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthorizationService } from '../../services/authorization-service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private authorizationService: AuthorizationService) {}

  isLoggedIn(): boolean {
    return this.authorizationService.isLoggedIn();
  }
  getUsername(): string | null {
    return this.authorizationService.getUsername();
  }
}
