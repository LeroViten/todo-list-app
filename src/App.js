import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import initialTodos from './todos.json';
import Stats from './components/Stats/Stats';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <Stats todos={todos} doneTodos={completedTodos} />
        <TodoList
          todos={todos}
          onDeleteToDo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
