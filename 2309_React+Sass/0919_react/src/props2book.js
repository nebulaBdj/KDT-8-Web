import './book.css'
import yeon from './연금술사.webp'

function Book(props) {
    return (
        <>
            <div className='main'>
                <h1>{props.title}</h1>
                <img src={yeon}></img>
                <h3>아침이 되기 직전의 새벽이 제일 어둡다.</h3>
                <p>저자: {props.author}</p>
                <p>판매가: {props.price}</p>
                <p>구분: {props.type}</p>
            </div>
        </>
    )
}

export default Book;