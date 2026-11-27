export default function TodoItem({ data, id, onClickHandler, toUpperCase }) {
  return (
    <li>
      <span>{data}</span> &nbsp;&nbsp;
      <button onClick={onClickHandler}>Delete</button> &nbsp;&nbsp;
      <button onClick={toUpperCase}>to Upper Case</button>
    </li>
  );
}
