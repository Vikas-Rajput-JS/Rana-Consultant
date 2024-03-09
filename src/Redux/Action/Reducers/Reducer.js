const InitialValue = {
  user: {},
};

export const user = (state = InitialValue, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
