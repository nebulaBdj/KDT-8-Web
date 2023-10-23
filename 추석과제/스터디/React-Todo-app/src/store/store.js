import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todo'
import clickedSlice from './clickedItem'

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        clickedItem: clickedSlice.reducer
    }
})

export default store