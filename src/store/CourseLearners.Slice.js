import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  learn:[
      {id:uuidv4(),
      val:"",
      },
      {id:uuidv4(),
      val:"",
      },
      {id:uuidv4(),
      val:"",
      },
      {id:uuidv4(),
      val:"",
      }
  ],
  requirements:[
    {
      id:uuidv4(),
      val:""
    }
  ],
  thisCourse:[
    {
      id:uuidv4(),
      val:""
    }
  ]

}

export const learnersSlice = createSlice({
  name: 'CourseLearners',
  initialState,
  reducers: {
    SetLearn: (state,action) => {

      state.learn.map((item)=>{

        if(item.id === action.payload.id){
          item.val = action.payload.value
        }
      })
    },
    SetRequirements: (state,action) => {
      state.requirements.map((item)=>{

        if(item.id === action.payload.id){
          item.val = action.payload.value
        }
      })
    },
    SetThisCourse: (state,action) => {
      state.thisCourse.map((item)=>{

        if(item.id === action.payload.id){
          item.val = action.payload.value
        }
      });
    },
    Add:(state,action)=>{
      if(action.payload === "learn"){
        state.learn.push({
          id:uuidv4(),
          val:"",
        })
      }
      if(action.payload === "requirements"){
        state.requirements.push({
          id:uuidv4(),
          val:"",
        })
      }
      if(action.payload === "thisCourse"){
        state.thisCourse.push({
          id:uuidv4(),
          val:"",
        })
      }
    },
    Delete:(state,action)=>{
      if(action.payload.seccion === "learn"){
        if(action.payload.minInputsNum !== state.learn.length){

            const input = state.learn.filter(item=> item.id !== action.payload.id);
            state.learn = input
        
    
        }
      }
      if(action.payload.seccion === "requirements"){
        if(action.payload.minInputsNum !== state.requirements.length){

            const input = state.requirements.filter(item=> item.id !== action.payload.id);
            state.requirements = input
        
    
        }
      }
      if(action.payload.seccion === "thisCourse"){
        if(action.payload.minInputsNum !== state.thisCourse.length){

            const input = state.thisCourse.filter(item=> item.id !== action.payload.id);
            state.thisCourse = input
        
    
        }
      }
    },
    Reorder:(state,action)=>{
      if(action.payload.seccion === "learn"){
        state.learn = action.payload.items
      }
      if(action.payload.seccion === "requirements"){
        state.requirements = action.payload.items
      }
      if(action.payload.seccion === "thisCourse"){
        state.thisCourse = action.payload.items
      }
    },
    SendLearners:(state,action)=>{
      console.log("enviado learners")
    }


  },
})


export const { SetLearn,SetRequirements,SetThisCourse,Add,Delete,Reorder,SendLearners} = learnersSlice.actions

export default learnersSlice.reducer