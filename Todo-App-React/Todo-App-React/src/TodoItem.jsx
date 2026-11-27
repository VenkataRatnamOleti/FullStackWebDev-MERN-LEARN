export default function TodoItem({
  data,
  id,
  onClickHandler,
  toUpperCase,
  toMarked,
  isDone,
}) {
    return (
      <li>
        <span>{isDone? <strike>{data}</strike>: data}</span> &nbsp;&nbsp;
        <button onClick={onClickHandler}>Delete</button> &nbsp;&nbsp;
        <button onClick={toUpperCase}>to Upper Case</button> &nbsp;&nbsp;
        <button onClick={toMarked}>Mark as Done</button>
      </li>
    );
}
