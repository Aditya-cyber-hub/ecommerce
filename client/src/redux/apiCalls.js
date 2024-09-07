import { publicRequest } from "../useFetch";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res)
    dispatch(loginSuccess(res.data));

  } catch {
    dispatch(loginFailure());
  }
};