import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice'

export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
  },
})