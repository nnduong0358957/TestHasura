const api = "http://localhost:4000/v1/graphql";

const _getResponse = async (getDoc, variables = {}) => {
  let response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      query: getDoc,
      variables: variables,
    }),
  });
  response = await response.json();

  return response;
};

// @-----------------------------------------@

export const getTodoList = () => async (dispatch) => {
  const getDoc = `
      query MyQuery {
        todos(order_by: {created_at: asc}) {
          id
          name
          status
          userId
          created_at
          updated_at
        }
      }
    `;

  const response = await _getResponse(getDoc);
  const { errors, data } = response;

  if (errors) {
    console.log(errors);
  } else {
    dispatch({ type: "UPDATE_TODOLIST", payload: data.todos });
  }
};

export const changeStatusTodo =
  (id, status, oldTodoList) => async (dispatch) => {
    const variables = { id: id, status: status };
    const getDoc = `
      mutation MyMutation($id: uuid = "", $status: Boolean = false) {
        update_todos_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
          id
          name
          status
          userId
          created_at
          updated_at
        }
      }
    `;

    let response = await _getResponse(getDoc, variables);
    const { errors } = response;

    if (!errors) {
      const newTodoList = oldTodoList.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );

      dispatch({
        type: "UPDATE_TODOLIST",
        payload: newTodoList,
      });
    } else console.log(errors);
  };

export const addTask = (newTaskName, userId) => async (dispatch) => {
  const variables = { name: newTaskName, userId: userId };
  const getDoc = `
      mutation MyMutation($name: String = "", $userId: uuid = "") {
        insert_todos_one(object: {name: $name, userId: $userId}) {
          id
          name
          status
          userId
          created_at
          updated_at
        }
      }
    `;

  let response = await _getResponse(getDoc, variables);
  const { errors, data } = response;

  if (!errors) {
    dispatch({
      type: "INSERT_TODOLIST",
      payload: data.insert_todos_one,
    });
  } else console.log(errors);
};

export const deleteTask = (id, oldTodoList) => async (dispatch) => {
  const variables = { id: id };
  const getDoc = `
      mutation MyMutation($id: uuid = "") {
        delete_todos_by_pk(id: $id) {
          id
          name
          status
          userId
          created_at
          updated_at
        }
      }
    `;

  let response = await _getResponse(getDoc, variables);
  const { errors } = response;

  if (!errors) {
    let newTodoList = oldTodoList;
    oldTodoList.forEach((item, index) => {
      if (item.id === id) {
        newTodoList.splice(index, 1);
      }
    });

    dispatch({
      type: "UPDATE_TODOLIST",
      payload: newTodoList,
    });
  } else console.log(errors);
};
