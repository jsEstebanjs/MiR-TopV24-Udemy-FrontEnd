import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:"",
  subTitle:"",
  description:"",
  level:"",
  category:"",
  teaching:""
}

export const counterSlice = createSlice({
  name: 'CreateCourse',
  initialState,
  reducers: {
    SetTitle: (state,action) => {
      state.title = action.payload;
    },
    SetSubTitle: (state,action) => {
      state.subTitle = action.payload;
    },
    SetDescription: (state,action) => {
      state.description = action.payload;
    },
    SetLevel: (state,action) => {
      state.level = action.payload;
    },
    SetCategory: (state,action) => {
      state.category = action.payload;
    },
    SetTeaching: (state,action) => {
      state.teaching = action.payload;
    },
    Send:(state)=>{
      console.log("enviado creacion del curso");
      console.log(state.description)
    }
  },
})


export const { SetTitle, SetSubTitle, SetDescription,SetLevel,SetCategory,SetTeaching,Send} = counterSlice.actions

export default counterSlice.reducer