import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice';
import CourseLearnersSlice from './CourseLearners.Slice';
import CreateCoursePriceSlice from './CreateCoursePrice.Slice';
import InstructorCoursesSlice from './InstructorCourses.Slice';
export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
    CourseLearners:CourseLearnersSlice,
    CoursePrice:CreateCoursePriceSlice,
    InstructorCourses:InstructorCoursesSlice,
  },
})