import { Injectable } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private storageKey = 'todos';

  constructor() { }

  // Get all todos from local storage
  getTodos(): Todo[] {
    const todos = localStorage.getItem(this.storageKey);
    return todos ? JSON.parse(todos) : [];
  }

  // Save todos to local storage
  saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  // Add a new todo
  addTodo(text: string): Todo[] {
    const todos = this.getTodos();
    todos.push({ text, completed: false });
    this.saveTodos(todos);
    return todos;
  }

  // Toggle completion of a todo
  toggleComplete(index: number): Todo[] {
    const todos = this.getTodos();
    todos[index].completed = !todos[index].completed;
    this.saveTodos(todos);
    return todos;
  }

  // Delete a todo
  deleteTodo(index: number): Todo[] {
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.saveTodos(todos);
    return todos;
  }
}
