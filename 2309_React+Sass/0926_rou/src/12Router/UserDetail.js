import {Link, Outlet, useParams} from 'react-router-dom';
import {users} from './User';

export default function UserDetail() {
    // const params = useParams();
    const {userid} = useParams();
    const full = useParams();
    console.log(full);
    // console.log(params);
    console.log(userid);
    return <>
        <div>
        사용자 {userid}은/는 {users[Number(userid)-1].name}
        {/* 객체구조분해 할당 사용 사용자 {userid}     */}
        </div>
        <Link to='comment'>Comment</Link>
        <Outlet context={{comment: users[Number(userid)-1].comment }}/>
    </>
}
