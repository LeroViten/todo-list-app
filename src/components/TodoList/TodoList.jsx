import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

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
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className="TodoList__text">{text}</p>
          <button
            className="TodoList__btn"
            type="button"
            onClick={() => onDeleteToDo(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
