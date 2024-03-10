const InitialValue = {
  user: {},
};

export const user = (state = InitialValue, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
      break;

    case "LOGOUT_SUCCESS":
      return state;
      break;
    default:
      return state;
      break;
  }
};
