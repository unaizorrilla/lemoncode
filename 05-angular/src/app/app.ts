import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './layout/footer/footer';
import { Navbar } from "./layout/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sample');
}
