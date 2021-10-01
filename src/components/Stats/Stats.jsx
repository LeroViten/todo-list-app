import './Stats.scss';

function Stats({ todos, doneTodos }) {
  return (
    <div className="todoStats">
      <p>Total items:{todos.length}</p>
      <p>Done:{doneTodos}</p>
    </div>
  );
}
export default Stats;
