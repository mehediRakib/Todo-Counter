import {createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload)
        },
        removeToDo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        editToDo:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
        }
    }
})
export const {addTodo,removeToDo,editToDo}=todoSlice.actions
export default todoSlice.reducer;