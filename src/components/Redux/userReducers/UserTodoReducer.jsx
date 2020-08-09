const { default: userConstants } = require("../userConstants/userConstants");

const initial_state = {
  userTodos: "",
};

const UserTodoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case userConstants.userTodos:
      if (action.payload.status) {
        return {
          ...state,
          userTodos: action.payload,
        };
      }

    default:
      return {
        state,
      };
  }
};

export default UserTodoReducer;
