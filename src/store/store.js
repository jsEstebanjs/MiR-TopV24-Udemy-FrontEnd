import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice';
import CourseLearnersSlice from './CourseLearners.Slice';

export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
    CourseLearners:CourseLearnersSlice,
  },
})