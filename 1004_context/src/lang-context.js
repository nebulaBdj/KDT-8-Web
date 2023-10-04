import {createContext} from 'react';

//Context 생성
//프로바이더와 컨슈머 두 개의 리액트 컴포넌트를 반환
const MyContext = createContext({
    language: 'ko',//있어도되고 없어도됨 이 값에 넣을거다를 알려주는 용도
    setLang: () => {}
    //앞으로 어떤 값을 사용할건지 그 타입을 미리 알려주는 용도
});

export default MyContext;