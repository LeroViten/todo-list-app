import React, { Component } from 'react';
import shortid from 'shortid';
import Stats from './components/Stats/Stats';
import TodoList from './components/TodoList/TodoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import Filter from './components/Filter/Filter';
import IconButton from './components/IconButton/IconButton';
import Modal from './components/Modal/Modal';
import { ReactComponent as AddIcon } from './icons/add.svg';
// import { ReactComponent as RemoveIcon } from './icons/delete.svg';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

    this.toggleModal();
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
    const { todos, filter, showModal } = this.state;
    const completedTodos = this.getCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <IconButton toggleModal={this.toggleModal}>
          <AddIcon width="30" height="30" fill="white" />
        </IconButton>
        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <ToDoForm onSubmit={this.addToDo} />
          </Modal>
        )}
        <Stats todos={todos} doneTodos={completedTodos} />
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
