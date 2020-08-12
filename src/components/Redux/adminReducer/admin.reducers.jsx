const { default: userConstants } = require("../userConstants/userConstants");

const initial_state = {
  adminTodos: null,
  users: [],
  userLogs: [],
};

const AdminTodoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case userConstants.admin_Todos:
      if (action.payload.data) {
          return {
        ...state,
        adminTodos: action.payload.data,
      };
      }
    
    case userConstants.user_Management:
      return {
        ...state,
        users: action.payload.data,
      };

    case userConstants.user_Logs:
      return {
        ...state,
        userLogs: action.payload.data,
      };

    default:
      return {
        ...state
      };
  }
};

export default AdminTodoReducer;
