import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userName: "",
  isAuthenticated: false,
};

const signinReducer: CaseReducer<UserState, PayloadAction<UserState>> = (
  state,
  action
) => action.payload;

const signoutReducer: CaseReducer<UserState, PayloadAction<UserState>> = () =>
  initialState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: signinReducer,
    signout: signoutReducer,
  },
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;
