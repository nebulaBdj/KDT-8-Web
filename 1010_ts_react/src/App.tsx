import React from 'react';
import Propstype1 from './PropsType1';

//타입스크립트는 입력하는 순간 오류를 찾아준다

function App() {
  return (
    <>
      <Propstype1 name={1111} /> 
    </>
  );
}

export default App;
