import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Define the structure for a to-do item
interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTodo: string = '';

  // Initialize todos as an empty array of Todo items
  todos: Todo[] = [];

  faTrash = faTrash;  // FontAwesome trash icon

  addTodo() {
    if (this.newTodo) {
      // Add a new to-do to the array with the correct type
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';  // Clear the input field after adding
    }
  }

  toggleComplete(index: number) {
    // Toggle the completed status of a to-do item
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(index: number) {
    // Remove the selected to-do from the array
    this.todos.splice(index, 1);
  }
}
