import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    price:""
}

export const coursePrice = createSlice({
  name: 'CoursePrice',
  initialState,
  reducers: {
    SetPrice: (state,action) => {
      state.price = action.payload;
    },
    SendPrice:(state)=>{
      console.log("enviado precio del curso");
      console.log(state.price)
    }
  },
})


export const {SetPrice,  SendPrice} = coursePrice.actions

export default coursePrice.reducer