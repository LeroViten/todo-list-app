import './Stats.scss';

function Stats({ todos, doneTodos }) {
  return (
    <>
      <p>Total items:{todos.length}</p>
      <p>Done:{doneTodos}</p>
    </>
  );
}
export default Stats;
