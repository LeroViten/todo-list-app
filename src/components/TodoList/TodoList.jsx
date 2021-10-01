// import react from 'react';

function TodoList({ todos, onDeleteToDo }) {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteToDo(id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
