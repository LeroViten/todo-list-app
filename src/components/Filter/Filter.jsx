import './Filter.scss';

export default function Filter({ filter, onChange }) {
  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Filter:</p>
      <label>
        <input
          type="text"
          className="TodoFilter__input"
          placeholder="Search"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
