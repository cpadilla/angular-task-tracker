import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task as TaskService } from '../../services/task';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
