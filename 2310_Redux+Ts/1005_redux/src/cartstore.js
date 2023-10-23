import { createStore } from "redux";

//리듀서 함수
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CART:
            //상품이 있으면 수량을 늘리자
            //findIndex() 는 배열의 인덱스 값을 찾아주며 존재하지 않는다면 -1 반환 존재시 해당 인덱스 값 반환
            const findIndex =  state.findIndex(elem => elem.id === action.product.id)
            if(findIndex !== -1) {
                //존재할때
                const newState = [...state]
                newState[findIndex].quantity++
                return newState
            } else {
                //존재하지 않을때
                return [...state, {...action.product, quantity: 1}];
            }
            
        case REMOVE_CART:
            return state.filter(el => el.id !== action.id);
        default:
            return state
    }
};

//스토어 생성, 리듀서 함수가 필수
const store = createStore(reducer)

export default store;