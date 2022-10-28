import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    itemShop:JSON.parse(localStorage.getItem("CoursesShop")) || []
}

export const shopCourses = createSlice({
  name: 'ShopCourses',
  initialState,
  reducers: {
    addItemShop:(state,action)=>{
      state.itemShop.unshift(action.payload)
    },


  }
})



export const { addItemShop } = shopCourses.actions

export default shopCourses.reducer