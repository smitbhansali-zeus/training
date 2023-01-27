import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todos;
  @Input() i!: number;
  @Output() tododeleter: EventEmitter<Todos> = new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todos> = new EventEmitter();
  Deletetodo(todo: Todos) {
    this.tododeleter.emit(todo);
  }
  Checkboxclick(todo: Todos) {
    this.todocheckbox.emit(todo);
  }
}
