import { Component, EventEmitter, inject, Input, Output, output, signal } from "@angular/core";
import { type NewTaskData } from "../task/task.model";
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  close = output<void>();
  @Output() add = new EventEmitter<NewTaskData>()
  @Input({ required: true }) userId!: string;

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId);

    this.close.emit();
  }
}