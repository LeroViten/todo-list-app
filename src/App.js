import React, { Component } from 'react';
import shortid from 'shortid';
import Stats from './components/Stats/Stats';
import TodoList from './components/TodoList/TodoList';
import initialTodos from './todos.json';
import ToDoForm from './components/ToDoForm/ToDoForm';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addToDo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
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

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.getCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Stats todos={todos} doneTodos={completedTodos} />
        <ToDoForm onSubmit={this.addToDo} />
        <Filter filter={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteToDo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
