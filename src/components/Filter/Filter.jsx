import './Filter.scss';

export default function Filter({ filter, onChange }) {
  return (
    <>
      <label>
        Filter{' '}
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
}
