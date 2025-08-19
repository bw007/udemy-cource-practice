import { Component, EventEmitter, Output, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { type NewTaskData } from "../task/task.model";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  imports: [FormsModule],
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  close = output<void>();
  @Output() add = new EventEmitter<NewTaskData>()

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }
}