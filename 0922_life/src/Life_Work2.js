import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserList () {

      const [userstate, setUser] = useState([]);
      
      async function axi() {
        const a = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(a.data);
    } 
    useEffect(() => {
        console.time();
        axi()
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then((res)=>{ 
        //     setUser(res.data);
        // })
        console.timeEnd();
        
    },[])  

    useEffect(()=>{
        console.log('유저 정보 업데이트' , userstate.length);
        return ()=>{
            console.log('연결해제 완료')
        }
      },[userstate])

    return (
        <div>
            <ul>
                {userstate.map((data)=>{
                    return <li key={data.id} >{data.name}-{data.email}</li>
                })}
            </ul>
        </div>
    )

}