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
      state.courses.unshift(action.payload)
    },

  }
})


export const { SetUserInfo } = userInfo.actions

export default userInfo.reducer