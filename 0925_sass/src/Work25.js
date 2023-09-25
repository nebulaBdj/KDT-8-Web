import styled from "styled-components";
import { useState } from "react";



const _Change = styled.button `
    background-color : ${(props)=>props.bcolor};
    color : ${(props)=>props.color};
`


export default function Colorcha() {

    const [bcolor, bsetColor] = useState('blue');
    const [color, setColor] = useState('white');

    const chage = () => {
        if(bcolor=='blue') {
            bsetColor('red');
        }else {
            bsetColor('blue');
        }

        if(color=='white') {
            setColor('black');
        }else {
            setColor('white');
        }
    } 
    
    return <>
        <div>
            <_Change onClick={chage} bcolor={bcolor} color={color}>색상변경!</_Change>
        </div>
    </>
}