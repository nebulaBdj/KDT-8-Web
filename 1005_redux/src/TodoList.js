import { useDispatch } from "react-redux";
import { ADD_TODO } from "./todosStore";

export default function Todolist() {
    const dispatch = useDispatch();
    
    let count = 0;    

    const addList = () => {
        let todos = [];
        const todo = document.querySelector('.todos').value;
        count = count + 1
        const todoObj = {
            id : count,
            todo : todo,
        };
        // todos.push(todoObj);
        /// 계속 오류가 나던 이유는 여기서 배열 자체를 보내버려서 이중 배열로 만들어져 id값과 todo값을 찾을 수 없기 때문이었다.
        
        

        console.log('보내는 놈', todoObj);
        dispatch({type: ADD_TODO, todoObj})
    }

    return (
        <>
            <h1>My Todos</h1>
            <input className="todos"  type="text" placeholder="Todos를 적어주세요"></input>
            <button onClick={addList}>등록</button>
        </>
    )

}