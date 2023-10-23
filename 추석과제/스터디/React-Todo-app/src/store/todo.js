import { createSlice } from '@reduxjs/toolkit'

const todoInitialState = {
    todo: [],
    inProgress: [],
    completed: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: todoInitialState,
    reducers: {
        storeTodo (state, action) {
            const {todos} = action.payload

            todos.forEach((todo) => {        
                if(todo.progress === 'todo') {            
                    state.todo.push({
                        id: todo.id,
                        title: todo.name,
                        progress: 'todo'
                    })
                } else if(todo.progress === 'inProgress') {            
                    state.inProgress.push({
                        id: todo.id,
                        title: todo.name,
                        progress: 'inProgress'
                    })
                } else {            
                    state.completed.push({
                        id: todo.id,
                        title: todo.name,
                        progress: 'completed'
                    })
                }
            })
        },
        addTodo(state, action) {
            const {id, title} = action.payload
            state.todo.push({
                id: id,
                title: title,
                progress: 'todo',
            })
        },
        changeToTodo(state, action) {
            const { id } = action.payload

            const matchedIndex = state.inProgress.findIndex(item => item.id === id)
            const matchedItem = state.inProgress.splice(matchedIndex, 1)[0]
            matchedItem.progress = 'todo'
            state.todo.push(matchedItem)
        },
        changeToInProgress(state, action) {
            const { status, id } = action.payload
            
            if(status === 'todo') {

                const matchedIndex = state.todo.findIndex(item => item.id === id)
                const matchedItem = state.todo.splice(matchedIndex, 1)[0]
                matchedItem.progress = 'inProgress'
                state.inProgress.push(matchedItem)

            } else if(status === 'completed') {

                const matchedIndex = state.completed.findIndex(item => item.id === id)
                const matchedItem = state.completed.splice(matchedIndex, 1)[0]
                matchedItem.progress = 'inProgress'
                state.inProgress.push(matchedItem)

            }
        },
        changeToCompleted(state, action) {
            const { id } = action.payload

            const matchedIndex = state.inProgress.findIndex(item => item.id === id)
            const matchedItem = state.inProgress.splice(matchedIndex, 1)[0]
            matchedItem.progress = 'completed'
            state.completed.push(matchedItem)
        },
        deleteItem(state, action) {
            const {id, status} = action.payload

            function deleteTodo (status, id) {
                const matchedIndex = status.findIndex(item => item.id === id)
                status.splice(matchedIndex, 1)
            }

            switch(status) {
                case 'todo':
                    deleteTodo(state.todo, id)
                    break
                case 'inProgress':
                    deleteTodo(state.inProgress, id)
                    break
                case 'completed':
                    deleteTodo(state.completed, id)
                    break
                default:
            }
        }
    }
})

export const { storeTodo, addTodo, changeToTodo, changeToInProgress, changeToCompleted, deleteItem } = todoSlice.actions
export default todoSlice