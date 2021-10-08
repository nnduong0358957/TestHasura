export const todoList = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_TODOLIST": {
      return [...action.payload];
    }
    case "INSERT_TODOLIST":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoList;
