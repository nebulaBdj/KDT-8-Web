import './App.css';
import ChangeStatusButton from './Component/ChangeStatusButton';
import TodoLine from './Component/TodoLine';
import InputHeader from './Component/InputHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeTodo } from './store/todo';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios({
        method: 'POST',
        url: '/'
      })
      dispatch(storeTodo({todos: res.data.todos}))
    }
    getTodos()
  }, [dispatch])
  return (
    <div>
      <InputHeader />
      <div style={{display: 'flex', justifyContent:'space-evenly', padding: '2rem', width: '100vw'}}> 

        <TodoLine statusName={'todo'} />
        
        <ChangeStatusButton plus={'inProgress'} minus={'todo'}/>

        <TodoLine statusName={'inProgress'} />

        <ChangeStatusButton plus={'completed'} minus={'inProgress'}/>

        <TodoLine statusName={'completed'}/>

      </div>
    </div>
  );
}

export default App;
