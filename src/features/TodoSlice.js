import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        AddTodo:(state,action) => 
        {
            state.value.push(action.payload)
        },
        DeleteTodo: (state,action) =>
        {
            state.value = state.value.filter((item) => item.id !== action.payload.id)    
        },
        EditTodo: (state,action) => 
        {  
            const EditId = action.payload.EditId.id
            state.value.map((item)=>
            {
                if(item.id === EditId)
                {
                    item.title = action.payload.newItem.title
                    item.status = action.payload.newItem.status
                    
                }
            })
        }
            }
})

export default TodoSlice.reducer
export const {AddTodo, DeleteTodo, EditTodo} = TodoSlice.actions