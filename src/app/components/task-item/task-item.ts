import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  ngOnInit(): void {}

}
