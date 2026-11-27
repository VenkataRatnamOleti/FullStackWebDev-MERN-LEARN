export default function TodoItem({ data, id, onClickHandler }) {
  return (
    <li>
      <span>{data}</span> &nbsp;&nbsp;
      <button onClick={onClickHandler}>Delete</button>
    </li>
  );
}
