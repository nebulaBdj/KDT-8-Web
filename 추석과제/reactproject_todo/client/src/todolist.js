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
                url: "http://localhost:8080/todos"
            });
            console.log('받아온 데이터', res.data);
            console.log('데이터 변환', Object.values(res.data));
            //객체 데이터 길이 가져오는법
            

            setTodos(Object.values(res.data));
            setLo(false);
        }
        tododata();

        console.log('state', todos); 
    }, []);

    const Add_todolist = async () => {
        console.log('state 추가 전',todos);
        const update_data = document.querySelector('.todo_text').value

        
        const res = await axios({
            method: "POST",
            url: "http://localhost:8080/todos",
            data: {
                title: update_data,
                done: 0, 
            },
        });

        console.log('추가한 데이터 가져오기', res.data);

        setTodos([...todos, res.data]);
    }

    const edit = async(id) => {
        const edit_data = document.querySelector(`.class${id}`).value;
        console.log('수정할 내용', edit_data);

        await axios({
            method : 'PATCH',
            url : `http://localhost:8080/todo/${id}`,
            data : {
                title : edit_data,
                done : 0,
            }
        });

        console.log('되나?')
        window.location.reload();

           
    };

    const del = async (id) => {
        console.log(id);
        
        const del_data = todos.filter(todo => todo.id !== id);

        console.log('삭제 후', del_data);

        setTodos(del_data);

        const del = await axios({
            method : 'DELETE',
            url : `http://localhost:8080/todo/${id}`
        });

    };
    
    return (
        <>
            <div>
                {
                    loading ? (
                        <h1>로딩중...</h1>
                    ) : (
                       <>
                        <h1>투두리스트</h1>
                        <input className='todo_text' type='text' placeholder='추가할 todolist 작성'></input><button onClick={Add_todolist}>추가</button>
                        <ul style={{listStyleType:'none'}}>
                            {todos.map((todo)=>{
                                let classN = `class${todo.id}`
                                return ( <div style={{margin:"10px"}}> 
                                <div style={{display:'flex'}}>
                                {/* <input className={todo.id} type='checkbox' /> */}
                                <li key={todo.id}>{todo.title}</li>
                                <button onClick={() => edit(todo.id)}>수정</button>
                                <button onClick={() => del(todo.id)}>삭제</button>
                                </div>
                                <input className = {classN} type='text' placeholder='수정 내용 작성 후 버튼 클릭' style={{width:"200px"}}/> 
                                </ div> )
                            })}
                       </ul> 
                       </>
                    )
                }
            </div>
        </>
    );
}