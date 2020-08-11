const { default: userConstants } = require("../userConstants/userConstants");

const initial_state = {
  userTodos: "",
  broadCastUpdates: false,
};

const UserTodoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case userConstants.user_Todos:
      if (action.payload.status) {
        return {
          ...state,
          userTodos: action.payload,
        };
      }

    case userConstants.broadCastUpdates:
      return {
        ...state,
        broadCastUpdates: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default UserTodoReducer;
