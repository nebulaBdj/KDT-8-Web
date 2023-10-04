import { useNavigate } from 'react-router-dom';
import {users2} from './User2';

export default function Codingon() {
    const navi = useNavigate();
    const onClick = () => {
        navi(-1);
    };

    return <>
    <div style={{backgroundColor:'yellow'}}>
        <p style={{fontWeight:'bold'}}>학생의 이름은 <span style={{color : 'green'}}>{users2[1].name}</span></p>
        <button onClick={onClick}>이전페이지로</button>
    </div>
    </>
}