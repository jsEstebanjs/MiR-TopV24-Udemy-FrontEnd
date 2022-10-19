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
      console.log(action.payload)
    },
    SetPetition:(state,action)=>{
      state.petition = action.payload
    }

  }
})


export const { CreateCourse , SetPetition } = intructorCourses.actions

export default intructorCourses.reducer