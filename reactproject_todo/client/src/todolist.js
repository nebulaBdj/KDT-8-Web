import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Todolist () {
    const [todos, setTodos] = useState([]);
    const [loading, setLo] = useState(true);
    
    useEffect(() => {
        const tododata = async () => {
            const res = await axios({
                method: "GET",
                url: "/todos"
            });
            console.log(res.data.data);
            setTodos(res.data.data);
            setLo(false);
        }
        tododata();
    }, []);

    const Add_todolist = async () => {
        const update_data = document.querySelector('.todo_text').value

        
        const res = await axios({
            method: "POST",
            url: "/todos",
            data: {
                title: update_data,
                done: 0, 
            },
        });
        
        todos.push({
            id: res.id,
            title: res.title,
            done: res.done,
        });
    }
    
    return (
        <>
            <div>
                {
                    loading ? (
                        <h1>로딩중...</h1>
                    ) : (
                       <>
                        <input className='todo_text' type='text' placeholder='추가할 todolist 작성'></input><button onClick={Add_todolist}>추가</button>
                        <ul>
                            {todos.map((data) => {
                                return <li key={data.id}>{data.title}</li>;
                            })}
                       </ul> 
                       </>
                    )
                }
            </div>
        </>
    );
}