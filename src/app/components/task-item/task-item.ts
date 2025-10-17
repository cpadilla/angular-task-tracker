import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem implements OnInit {
  @Input() task: Task;

  ngOnInit(): void {}

}
