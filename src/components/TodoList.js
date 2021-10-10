import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodoList,
  changeStatusTodo,
  addTask,
  deleteTask,
} from "../actions/todoList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import Item from "./Item.js";

function TodoList() {
  const history = useHistory();
  const loginUser = JSON.parse(localStorage.getItem("token"));

  const todoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const initFetch = useCallback(() => {
    if (loginUser) dispatch(getTodoList(loginUser.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onClick = (item) => {
    const taskChange = todoList.find((e) => e.id === item.id);
    dispatch(changeStatusTodo(taskChange.id, !taskChange.status, todoList));
  };

  const handleAddTask = () => {
    setNewTask("");
    dispatch(addTask(newTask, loginUser.id));
  };

  const handleDeleteTask = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTask(id, todoList));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const _logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className="todoList">
      <div className="btn-logout pointer" onClick={() => _logout()}>
        <div>Log out</div>
        <FontAwesomeIcon
          className="logout-icon"
          icon={faSignOutAlt}
          color="red"
          onClick={(e) => {}}
        />
      </div>
      <div className="card">
        <div className="title">TO DO</div>
        {todoList.map((e) => (
          <Item
            item={e}
            key={e.id}
            onClick={onClick}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
        <hr className="horizontal_divider" />
        <div className="addTask">
          <input
            className="addInput"
            type="text"
            placeholder="+ New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="addBtn" onClick={handleAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
