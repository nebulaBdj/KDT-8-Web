
import React, {useState, useRef } from "react";

interface Props {
    name : string | number;
    age? : string;
}

const Propstype1 : React.FC<Props> = ({name, age}) => {

    const [count, setCount] = useState<number | string>(0);
    const myinput = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        myinput.current?.focus();
    }

    const onClick = (e:React.MouseEvent<HTMLElement>) => {};//any로 먼처 치고 나중에 찾기

    return( 
        <>
            <h2>Hello {name}</h2>
            <h2>{age}</h2>
            <input ref={myinput} />
            <button onClick={handleFocus}>버튼</button>
            <form action="">
                <button onClick={(e) => onClick(e)}>제출</button>
            </form>
        </>
    )
}

export default Propstype1

///////////위에처럼 써도 되고 아래처럼 써도된다. 요즘에는 아래처럼 많이 쓴다고 한다.

// export default function PropsType1({name} : Props) {//무조건 타입을 지정해줘야한다.
//     return <>
//         <h2>Hello {name}</h2>
//     </>
// }