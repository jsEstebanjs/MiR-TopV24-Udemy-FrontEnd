import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice';
import InstructorCoursesSlice from './InstructorCourses.Slice';
export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
    InstructorCourses:InstructorCoursesSlice,
  },
})