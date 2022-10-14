import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses:[]
}

export const intructorCourses = createSlice({
  name: 'InstructorCourses',
  initialState,
  reducers: {
    SetCourses: (state,action) => {
      state.courses.push(action.payload);
    }
  }
})


export const { SetCourses } = intructorCourses.actions

export default intructorCourses.reducer