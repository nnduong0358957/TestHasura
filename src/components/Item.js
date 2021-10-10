import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function TodoList({ item, onClick, handleDeleteTask }) {
  return (
    <div
      className={`item pointer ${item.status ? "done" : ""}`}
      onClick={() => onClick(item)}
    >
      <div className="itemContent">{item.name}</div>
      <FontAwesomeIcon
        className="deleteBtn"
        icon={faTimesCircle}
        color="red"
        onClick={(e) => handleDeleteTask(e, item.id)}
      />
    </div>
  );
}

export default TodoList;
