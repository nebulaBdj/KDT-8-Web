// import { createStore } from 'redux';

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// //리듀서는 데이터를 수정해주는 함수
// //액션값을 문자열로 했기 때문에 설정된 액션과 다른 이름을 가져와도 오류를 구분하지 못한다.
// //이런 문제를 해결하기 위해 변수안에 문자열을 넣어 변수화를 하고 변수를 case에 넣는다.

// const ADD = 'ADD';
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD :
//       return state + 1;
//     case 'MINUS' :
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //store는 데이터를 넣는곳
// //createStore: store생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// //subscribe()는 함수를 반환하며 데이터와 저장소가 변경될때마다 함수를 실행
// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// })

// add.addEventListener('click', () => {
//   countStore.dispatch({type: ADD});
// });

// minus.addEventListener('click', () => {
//   countStore.dispatch({type: 'MINUS'});
// });

// // countStore.dispatch({ type: 'ADD'});
// // countStore.dispatch({ type: 'ADD'});
// // countStore.dispatch({ type: 'ADD'});
// // countStore.dispatch({ type: 'MINUS'});

// //getState()는 createStore로 생성된 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
// console.log('state', countStore.getState());


//JS로 만든 +1-1코드
// let count = 0;

// add.addEventListener('click', () => {
//   count = count + 1;
// });

// minus.addEventListener('click', () => {
//   count = count - 1;
// });


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//과제 1
// import { createStore } from 'redux';

// const input = document.querySelector('#text').value;
// const ul = document.querySelector('#ul');

// const ADD_TODO = 'ADD_TODO';
// const DEL_TODO = 'DEL_TODO';

// const countReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO :
//       return [...state, input];
//     case DEL_TODO :
//       return state.filter(el => el.id !== action.id);
//     default:
//       return state
//   }
// }


//과제 2
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './cartstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);