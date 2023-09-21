import PropTypes from 'prop-types';

// 펑션 컴포넌트명 const 컴포넌트명 = () => {}
// function FunctionCom(props) {
//     const myClass = 'kdt8';


//     return <>
//         <div>반갑습니다. {myClass}에 오신 것을 환영합니다.</div>
//         <div>{props.name}</div>
//     </>
// }


function FunctionCom({name, age, children}) {
    const myClass = 'kdt8';


    return <>
        <div>반갑습니다. {myClass}에 오신 것을 환영합니다.</div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{children}</div>
        <br/>
    </>
}

FunctionCom.defaultProps = {
    name : '파라다이스',
    age : 10,
}

FunctionCom.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
}

export default FunctionCom;//이거를 위에 적어도 상관없다.