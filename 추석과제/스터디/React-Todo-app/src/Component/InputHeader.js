import { useRef } from "react"
import { addTodo, deleteItem } from "../store/todo"
import { setTodoState } from "../store/clickedItem"
import { useDispatch, useSelector } from "react-redux"
import classes from '../CSS/InputHeader.module.css'
import axios from "axios"

export default function InputHeader() {
    const todoInputRef = useRef()
    const dispatch = useDispatch()
    const { todoId, todoStatus } = useSelector(state => state.clickedItem)
     
    const addTodoHandler = async () => {
        const todoInput = todoInputRef.current

        if(todoInput.value.length === 0) {
            todoInput.focus();
            return;
        }

        const res = await axios({
            method: 'POST',
            url: '/register-todo',
            data: {
                name: todoInput.value
            }
        })
        const {id, name} = res.data.todo
        dispatch(addTodo({id: id, title: name}))
        dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        todoInput.value = ''
    }

    const deleteTodoHandler = async () => {
        try {
            const res = axios({
                method: 'DELETE',
                url: `/todo/${todoId}`
            })
            dispatch(deleteItem({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }
    }

    const cancelHandler = () => {
        dispatch(setTodoState({todoId: 0, todoStatus: ''}))
    }
    
    return (
        <header className={classes['header-container']}>
            <input type='text' ref={todoInputRef}/>
            <button onClick={addTodoHandler}>추가하기</button>
            <button onClick={deleteTodoHandler} style={{visibility: todoId ? 'visible' : 'hidden'}}>삭제하기</button>
            <button onClick={cancelHandler} style={{visibility: todoId ? 'visible' : 'hidden'}}>취소</button>
        </header>
    )
}