import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  studentCourses: [],
  teacherCourses: [],
  isInstructor: false,
  fullName: "",
  avatar: "",
};

export const userInfo = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    SetUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    changeIsInstructor: (state, action) => {
      state.isInstructor = true;
    },
    ResetUserInfo: (state, action) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const { SetUserInfo, ResetUserInfo, changeIsInstructor } =
  userInfo.actions;

export default userInfo.reducer;
