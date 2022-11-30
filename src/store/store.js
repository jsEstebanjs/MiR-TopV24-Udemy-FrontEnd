import { configureStore } from '@reduxjs/toolkit'
import CreateCourseReducer from './CreateCourse.Slice';
import UserInfoSlice from './UserInfo.Slice';
import ShopCoursesSlice from './ShopCourses.Slice';

export const store = configureStore({
  reducer: {
    CreateCourse:CreateCourseReducer,
    UserInfo:UserInfoSlice,
    ShopCourses:ShopCoursesSlice
  },
})