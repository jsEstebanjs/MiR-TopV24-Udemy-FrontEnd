import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    email:"",
    studentCourses:"",
    teacherCourses:"",
    isInstructor:"",
    fullName:"",
    avatar:""
}

export const userInfo = createSlice({
  name: 'UserInfo',
  initialState,
  reducers: {
    SetUserInfo:(state,action)=>{
      return {
        ...state,
        ...action.payload
      }
    },
    ResetUserInfo:(state,action)=>{
      return {
        ...state,
        ...initialState
      }
    }
  }
})

export const { SetUserInfo, ResetUserInfo } = userInfo.actions

export default userInfo.reducer