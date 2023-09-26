import { Outlet } from 'react-router-dom';
import Header from './12Router/Header';
import Router from './Router';

function App() {
    return (
        <>
            {/* 최근 버전 */}
            <Header />
            <Outlet />
            {/* 위의 아웃렛은 뭘까?? >> 자식 컴포넌트를 계속 불러올 수 있다. */}
            {/* 옛 버전 */}
            {/* <Router /> */}
            
        </>
    );
}

export default App;
