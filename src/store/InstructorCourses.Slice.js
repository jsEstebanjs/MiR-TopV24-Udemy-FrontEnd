import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    courses:[],
    petition:false
}

export const intructorCourses = createSlice({
  name: 'InstructorCourses',
  initialState,
  reducers: {
    CreateCourse:(state,action)=>{
      state.courses.unshift(action.payload)
    },
    LoadingCourses:(state,action)=>{
      state.courses = action.payload
    },
    SetPetition:(state,action)=>{
      state.petition = action.payload
    }

  }
})


export const { CreateCourse , SetPetition , LoadingCourses } = intructorCourses.actions

export default intructorCourses.reducer