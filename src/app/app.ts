import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Header } from './components/header/header';
import { Button } from './components/button/button';
import { Tasks } from './components/tasks/tasks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    HttpHeaders,
    Header,
    Button,
    Tasks,
    FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
