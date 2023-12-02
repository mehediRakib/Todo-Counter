import {createSlice} from "@reduxjs/toolkit";


export const counterslice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
            },
        decrement:(state)=>{
            state.value=state.value-1;
        },
        setCustomValue:(state,action)=>{
            state.value=action.payload
        },
        reset:(state)=>{
            state.value=0;
        }
    },
})

export const {increment,decrement,setCustomValue,reset  }=counterslice.actions;
export default counterslice.reducer;