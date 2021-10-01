import React from 'react';
// import IconButton from '../IconButton/IconButton';
// import { ReactComponent as RemoveIcon } from '../../icons/delete.svg';

export default function Todo({
  text,
  completed,
  onToggleCompleted,
  onDeleteToDo,
}) {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p className="TodoList__text">{text}</p>
      {/* <IconButton>
        <RemoveIcon height="20" width="20" fill="white" />
      </IconButton> */}
      <button className="TodoList__btn" type="button" onClick={onDeleteToDo}>
        Remove
      </button>
    </>
  );
}
