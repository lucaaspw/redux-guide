import UserActionTypes from "./action-types";

export const userLogin = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload
});

export const userLogOut = () => ({
  type: UserActionTypes.LOGOUT
})