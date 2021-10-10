import React from "react";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
  {
    path: "/TestHasura",
    exact: true,
    main: () => <TodoList />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
  },
];

export default routes;
