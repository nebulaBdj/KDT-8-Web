import { useState, useEffect } from "react";


function MyComponent(props) {
    const { number } = props;

    const [text, setText] = useState();

    useEffect(()=>{
        console.log('항상 실행합니다.')
    });

    useEffect(()=>{
        console.log('생성될때만 실행합니다.');

        return ()=> {
            console.log('제거될때 실행됩니다.');
        };
    }, []);

    useEffect(()=>{
        console.log('수바뀜')
    }, [number]);

    useEffect(()=>{
        console.log('state 바뀜')
    }, [text]);

    return(
        <>
            <div>MyComponent {number}</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        </>
    )

}

export default function LifeCycleF() {
    const [number, setNum] = useState(0);
    const [visible, setVis] = useState(true);

    const chageNum = () => {
        setNum(()=> number + 1);
    }

    const chageVis = () => {
        setVis(()=> !visible);
    }

    return <>
        <button onClick={chageNum}>PLUS</button>
        <button onClick={chageVis} >ON/OFF</button>
        {visible && <MyComponent number={number}/>}
    </>
}