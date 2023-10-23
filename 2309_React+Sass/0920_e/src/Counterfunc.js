import { useState } from "react";

export default function CounterF() {
    const [number, setNumber] = useState(0);

    const handincre = () => {
        // setNumber(number + 1);
        setNumber( () => number + 1);
    };
    
    const handDec = () => {
        setNumber(number - 1);
    };
    
    return <div>

        <h1>{number}</h1>
        <button onClick={handincre}>증가</button>
        <button onClick={handDec}>감소</button>

    </div>
}