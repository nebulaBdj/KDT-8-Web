import classes from '../CSS/ChangeStatusButton.module.css'
import { changeToInProgress, changeToCompleted, changeToTodo } from '../store/todo';
import { setTodoState } from '../store/clickedItem';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

export default function ChangeStatusButton({plus, minus, children}) {

    const dispatch = useDispatch()
    const { todoId, todoStatus } = useSelector(state => state.clickedItem)
    
    const clickToTodoHandler = async () => {
        try {
                const result = axios({
                method: 'PATCH',
                url: `todo/${todoId}/todo`
            })
            dispatch(changeToTodo({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }
    }
    const clickToInProgressHandler = async () => {
        try {
            const result = axios({
                method: 'PATCH',
                url: `todo/${todoId}/inProgress`
            })
            dispatch(changeToInProgress({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }   
    }
    const clickToCompletedHandler = async () => {

        try {
                const result = axios({
                method: 'PATCH',
                url: `todo/${todoId}/completed`
            })
            dispatch(changeToCompleted({status: todoStatus, id: todoId}))
            dispatch(setTodoState({todoId: 0, todoStatus: ''}))
        } catch (e) {
            console.log(e)
        }
    }
    
    const selectPlusClickHandler = () => {
        if(plus === 'inProgress') {
            return clickToInProgressHandler
        } else if (plus === 'completed') {
            return clickToCompletedHandler
        }
    }
    const selectMinusClickHandler = () => {
        if(minus === 'todo') {
            return clickToTodoHandler
        } else if (minus === 'inProgress') {
            return clickToInProgressHandler
        }
    }

    return (
        
        <div className={classes['button-container']}>
            <button onClick={selectPlusClickHandler()} style={{visibility: todoStatus ===  minus ? 'visible' : 'hidden'}}> + </button>
            <button onClick={selectMinusClickHandler()} style={{visibility: todoStatus === plus ? 'visible' : 'hidden'}}> - </button>
        </div>
    )
}