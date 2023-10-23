import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    //useNavigete(): Link컴포넌트를 사용하지않고 사용자를 어딘가로 이동시키는 기능
    const navi = useNavigate();
    const onClick = () => {
        navi('redirect');
    };

    //Link: 유저가 클릭
    return (
        <div>
            {/* <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <button onClick={onClick}>Redirect</button>
                </li>
            </ul> */}
            <Link to='/'><h2>ReactRouter 실습</h2></Link>
            <nav>
                <ul>
                    <li style={{margin:'4px'}}>
                        <Link to='/student/kdt'>학생 kdt</Link>
                    </li>
                    <li style={{margin:'4px'}}>
                        <Link to='/student/codingon'>코딩온</Link>
                    </li>
                    <li style={{margin:'4px'}}>
                        <Link to='/student/new'>searchParams</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
