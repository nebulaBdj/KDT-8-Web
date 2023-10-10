import { useDispatch } from "react-redux";
import { ADD_TODO } from "./todosStore";

export default function Todolist() {
    const dispatch = useDispatch();
    
    

    const addList = () => {
        const todos = document.querySelector('.todos').value;
        dispatch({type: ADD_TODO, todos})
    }

    return (
        <>
            <h1>My Todos</h1>
            <input className="todos"  type="text" placeholder="Todos를 적어주세요"></input>
            <button onClick={addList}>등록</button>
        </>
    )

}