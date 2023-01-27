import { Component, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  allowbtn: boolean = false;
  @Output() todoadder: EventEmitter<Todos> = new EventEmitter();
  Addtodo() {
    const todo: Todos = {
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoadder.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
