import classes from '../CSS/TodoItem.module.css'
import { setTodoState } from '../store/clickedItem'
import { useSelector, useDispatch } from 'react-redux'

export default function TodoItem({ item }) {
  const dispatch = useDispatch()
  const todoId = useSelector(state => state.clickedItem.todoId)

  return (
    <div className={` ${classes['todoItem-container']} ${todoId === item.id ? classes['todoItem-container-click'] : null}`} onClick={() => {
      dispatch(setTodoState({
      todoId: item.id,
      todoStatus: item.progress
    }))}}>
        <h3 id={item.id}>{item.title}</h3>
        <p>{item.progress}</p>
    </div>
  )
}
