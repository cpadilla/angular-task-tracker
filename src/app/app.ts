import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Button } from './components/button/button';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Button, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
