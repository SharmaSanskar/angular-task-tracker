import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter<number>();
  @Output() onToggleTask = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.onDeleteTask.emit(id);
  }

  onToggle(task: Task): void {
    this.onToggleTask.emit(task);
  }
}
