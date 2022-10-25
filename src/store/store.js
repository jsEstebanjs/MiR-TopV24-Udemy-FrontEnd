import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice';
import InstructorCoursesSlice from './InstructorCourses.Slice';
import UserInfoSlice from './UserInfo.Slice'

export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
    InstructorCourses:InstructorCoursesSlice,
    UserInfo:UserInfoSlice
  },
})