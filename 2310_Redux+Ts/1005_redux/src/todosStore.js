import { createStore } from "redux";

export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log('add에서 받은 놈', action.todoObj);
            return [...state, action.todoObj];
        case DEL_TODO:
            console.log('del에서 받은 놈', action.id);
            return state.filter(el => el.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;