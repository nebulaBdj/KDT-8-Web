import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoId: 0,
    todoStatus: ''
}

const clickedSlice = createSlice({
    name: 'clickedSlice',
    initialState,
    reducers: {
        setTodoState(state, action) {
            const {todoId, todoStatus} = action.payload
            state.todoId = todoId
            state.todoStatus = todoStatus
        },
    }
})

export const { setTodoState } = clickedSlice.actions
export default clickedSlice