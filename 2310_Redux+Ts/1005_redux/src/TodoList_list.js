import { useDispatch, useSelector } from "react-redux";
import { DEL_TODO } from "./todosStore";


export default function TodoList_list({}) {
    const dispatch = useDispatch();
    const list = useSelector((state) => state);
    console.log('받아온 리스트',list);

    const deltodos = (id) => {
        
        dispatch({type: DEL_TODO, id})
    }



    return (
        <>
            <ul>
                {list.map((todo) => {
                    return (<>
                    <li key={todo.id}>{todo.todo}</li>
                    <button onClick={()=>deltodos(todo.id)}>완료</button>
                    </>)    
                })}
            </ul>
        </>
    )
}