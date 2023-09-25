import styled from 'styled-components';

const _BoxOne = styled.div//순수 html 태그가 들어감
`
    background-color: blue;
    width: 100px;
    height: 100px;
`
const _BoxTwo = styled.div `
    background-color: ${(props) => props.color};//프롭스를 보내고 받을 수 있다.
    width: 100px;
    height: 100px;
`

const _CircliOne = styled(_BoxTwo)
`
    /* background-color: ${(props) => props.color};
    width: 100px;
    height: 100px;
    border-radius: 50px */

    //위 컴포넌트 받는법 div 옆 괄호에 위 컴포넌트를 쓰고 원하는 css 추가
    border-radius: 50px
`
//기존 태그fmf 이름만 바꿔서 사용하는법
const _Btn = styled.button`
background-color:blue;
color: white;
padding: 10px 15px;
border-radius: 4px;
`

const _Input = styled.input.attrs({required: true});//태그에 옵션값 넣기

//중첩
const _BoxThree = styled.div `
     width : 200px;
    height : 100px;
    background-color: aqua;
    line-height : 100px;
    text-align: center

    ${_Input} {
        background-color : yellow;
    }

    p {
        color: red;
        font-weight: 900;
        &:hover{
            font-size:32px;
        }
    }
`






export default function StyledCom() {
    return <div>
        <_BoxOne></_BoxOne>
        <_BoxTwo color='red'></_BoxTwo>
        <_CircliOne color='blue' />
        <_Btn as="a">클릭</_Btn>

        <_BoxThree>
            <p>Hello</p>
        </_BoxThree>
    </div>
}