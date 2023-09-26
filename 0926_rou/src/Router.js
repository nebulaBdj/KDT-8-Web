import { createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './12Router/Header';
import Home from './12Router/Home';
import About from './12Router/About';
import NotFound from './12Router/404';
import User from './12Router/User';
import Redirect from './12Router/Redirect';
import UserDetail from './12Router/UserDetail';
import App from './App';
import Error from './12Router/Error';
import Comment from './12Router/Comment';

//실습
import Student from './12Router/Student';
import Codingon from './12Router/condingon';
import Search from './12Router/Sech';

// 옛버전
// export default function Router() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/user" element={<User />} />
//                     <Route path="/user/:id" element={<UserDetail />} />
//                     <Route path="/redirect" element={<Redirect />} />
//                     <Route path="*" element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }
//위의 방식은 예전에 쓰던 라우터 방식이다.

//최근 버전
const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {
            //     path:'',
            //     element: <Home />,
            //     errorElement: <Error />
            // },
            // {
            //     path: 'about',
            //     element: <About />,
            // },
            // {
            //     path: 'redirect',
            //     element: <Redirect />
            // }

        ],
        errorElement:<NotFound />
    },
    {
        path: 'student',
        element: <App />,
        children: [
            {
                path: 'kdt',
                element: <Student />,
            },
            {
                path: 'codingon',
                element: < Codingon/>,
            },
            {
                path: 'new',
                element: <Search />,
            },
        ],
    },
]);

export default Router;