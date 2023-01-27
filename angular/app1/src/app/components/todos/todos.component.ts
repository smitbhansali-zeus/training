import { Component } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todos[] = [];
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }
  Deletetodo(todo: Todos) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  Addtodo(todo: Todos) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  Checkboxtodo(todo: Todos) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
