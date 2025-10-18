import { Component, ApplicationConfig } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Button } from './components/button/button';
import { Tasks } from './components/tasks/tasks';
import { Footer } from './components/footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    FormsModule,
    Header,
    Button,
    Tasks,
    Footer,
    FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
