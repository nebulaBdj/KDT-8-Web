import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"
import classes from '../CSS/TodoLine.module.css'

export default function TodoLine({statusName}) { 
    const todoItemLists = useSelector(state => state.todo)

    let matchedTodoList = []
    
    for (const progress in todoItemLists) {
        if(statusName === progress) {
            matchedTodoList = [...todoItemLists[progress]]
        }
    }
    return (
        <div>
            <h1 className={classes['todoLine-name']}>{statusName}</h1>
            <div className={classes['todoLine']}>
                {
                    matchedTodoList.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} />
                    )
                    })
                }
            </div>
        </div>
    )
}