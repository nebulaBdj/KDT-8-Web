import { createStore } from "redux";

export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, 'ddd'];
        case DEL_TODO:
            return state.filter(el => el !== 'ddd');
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;