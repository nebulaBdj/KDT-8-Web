import { useNavigate, useSearchParams } from 'react-router-dom';
import {users2} from './User2';

export default function Search() {
    const [nameS, setName] = useSearchParams();
    console.log(nameS.get('name'));
    const navi = useNavigate();
    const onClick = () => {
        navi(-1);
    };

    return <>
    <div style={{backgroundColor: 'yellow'}}>
        <p style={{fontWeight:'bold'}}>학생의 이름은 <span style={{color : 'green'}}>{users2[2].name}</span></p>
        <p style={{fontWeight:'bold'}}>실제 이름은 <span style={{color : 'red'}}>{nameS.get('name')}</span></p>
        <button onClick={onClick}>이전페이지로</button>
    </div>
    </>
}