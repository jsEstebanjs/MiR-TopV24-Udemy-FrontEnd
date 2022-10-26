import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  title: "",
  subtitle: "",
  description: "",
  language:"English(US)",
  level: "",
  category: "",
  primaryTaught: "",
  learningObjectives: [
    { id: uuidv4(), val: "" },
    { id: uuidv4(), val: "" },
    { id: uuidv4(), val: "" },
    { id: uuidv4(), val: "" },
  ],
  requirements: [
    {
      id: uuidv4(),
      val: "",
    },
  ],
  intendedLearners: [
    {
      id: uuidv4(),
      val: "",
    },
  ],
  price: "",
  classes: [

  ]
};

export const counterSlice = createSlice({
  name: "CreateCourse",
  initialState,
  reducers: {
    SetTitle: (state, action) => {
      state.title = action.payload;
    },
    SetSubTitle: (state, action) => {
      state.subtitle = action.payload;
    },
    SetDescription: (state, action) => {
      state.description = action.payload;
    },
    SetLevel: (state, action) => {
      state.level = action.payload;
    },
    SetCategory: (state, action) => {
      state.category = action.payload;
    },
    SetTeaching: (state, action) => {
      state.primaryTaught = action.payload;
    },
    ResetState: (state,action) => {
      return {
        ...state,
        ...initialState,
      };
    },
    SetLearn: (state, action) => {
      state.learningObjectives.map((item) => {
        if (item.id === action.payload.id) {
          item.val = action.payload.value;
        }
      });
    },
    SetRequirements: (state, action) => {
      state.requirements.map((item) => {
        if (item.id === action.payload.id) {
          item.val = action.payload.value;
        }
      });
    },
    SetThisCourse: (state, action) => {
      state.intendedLearners.map((item) => {
        if (item.id === action.payload.id) {
          item.val = action.payload.value;
        }
      });
    },
    Add: (state, action) => {
      if (action.payload === "learn") {
        state.learningObjectives.push({
          id: uuidv4(),
          val: "",
        });
      }
      if (action.payload === "requirements") {
        state.requirements.push({
          id: uuidv4(),
          val: "",
        });
      }
      if (action.payload === "thisCourse") {
        state.intendedLearners.push({
          id: uuidv4(),
          val: "",
        });
      }
    },
    Delete: (state, action) => {
      if (action.payload.seccion === "learn") {
        if (action.payload.minInputsNum !== state.learn.length) {
          const input = state.learningObjectives.filter(
            (item) => item.id !== action.payload.id
          );
          state.learningObjectives = input;
        }
      }
      if (action.payload.seccion === "requirements") {
        if (action.payload.minInputsNum !== state.requirements.length) {
          const input = state.requirements.filter(
            (item) => item.id !== action.payload.id
          );
          state.requirements = input;
        }
      }
      if (action.payload.seccion === "thisCourse") {
        if (action.payload.minInputsNum !== state.thisCourse.length) {
          const input = state.intendedLearners.filter(
            (item) => item.id !== action.payload.id
          );
          state.intendedLearners = input;
        }
      }
    },
    Reorder: (state, action) => {
      if (action.payload.seccion === "learn") {
        state.learningObjectives = action.payload.items;
      }
      if (action.payload.seccion === "requirements") {
        state.requirements = action.payload.items;
      }
      if (action.payload.seccion === "thisCourse") {
        state.intendedLearners = action.payload.items;
      }
      if (action.payload.seccion === "class") {
        state.classes = action.payload.items;
      }
    },
    SetPrice: (state, action) => {
      state.price = action.payload;
    },
    SetInitialState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    SetClassTitle:(state,action)=>{
      state.classes.forEach((item)=>{
        if(item._id === action.payload._id){
          item.classTitle = action.payload.classTitle
        }
      })
    },
    SetClassDescription:(state,action)=>{
      state.classes.forEach((item)=>{
        if(item._id === action.payload._id){
          item.classDescription = action.payload.classDescription
        }
      })
    },
  },
});

export const {
  SetTitle,
  SetSubTitle,
  SetDescription,
  SetLevel,
  SetCategory,
  SetTeaching,
  ResetState,
  SetLearn,
  SetRequirements,
  SetThisCourse,
  Add,
  Delete,
  Reorder,
  SendLearners,
  SetPrice,
  SetInitialState,
  SetClassTitle,
  SetClassDescription
} = counterSlice.actions;

export default counterSlice.reducer;
