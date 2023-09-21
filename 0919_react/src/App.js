
// import ClassCom from './Classcom';
// import './work1.css'
import FunctionCom from './FuncCom';
import ClassCom from './Classcom';
import Work from './workCom'//이름이 대문자여야 한다 그래야 인식함
import Test1 from './test';
import Test2 from './test2';
import Food from './props1food';

import Book from './props2book';

function App() {
  return (
    <>
    {/* <FunctionCom></FunctionCom> */}
    {/* <Work /> */}
    {/* <Test1></Test1>
    <Test2></Test2> */}

    {/* <ClassCom name='황동준'></ClassCom>
    <ClassCom /> */}

    {/* <FunctionCom name="kdt8" age={12}>
      안녕 */}
      {/* 안녕은 PROPS.CHILDREN으로 받을 수 있다 */}
    {/* </FunctionCom>
    <FunctionCom /> */}


    {/* <Food food="제육"></Food>
    <Food></Food> */}

    <Book title="이번주 베스트셀러" author="황동준" price="13,500원" type="장편소설"></Book>
    </>
  );
}

export default App;// 디폴트는 파일 하나에 하나만 있어야한다.
