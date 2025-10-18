import { Component, signal } from '@angular/core';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly title = signal('Task Tracker');
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService:Ui) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
