import { useState, useEffect, useCallback } from "react";
import "../css/TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodoList,
  changeStatusTodo,
  addTask,
  deleteTask,
} from "../actions/fetchAPI.js";

import Item from "./Item.js";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const initFetch = useCallback(() => {
    dispatch(getTodoList());
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
    dispatch(addTask(newTask, "0c5d5099-f7b5-47ed-b930-4a8d054c2d79"));
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

  return (
    <div>
      <div className="container">
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
