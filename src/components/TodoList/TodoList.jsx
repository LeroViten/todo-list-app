import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';
import Todo from '../Todo/Todo';

function TodoList({ todos, onToggleCompleted, onDeleteToDo }) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteToDo={() => onDeleteToDo(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
