import { useDispatch, useSelector } from "react-redux";
import { DEL_TODO } from "./todosStore";


export default function TodoList_list({}) {
    const dispatch = useDispatch();
    const list = useSelector((state) => state);
    console.log(list);

    const deltodos = () => {}

    return (
        <>
            <ul>
                {list}
            </ul>
        </>
    )
}