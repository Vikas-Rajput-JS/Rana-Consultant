export const login_Success = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
export const LOGOUT_SUCCESS = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};
