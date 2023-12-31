// import { useContext } from 'react';
// import CartContext from './store/cart-context';
import { useDispatch } from 'react-redux';
import {ADD_CART} from './cartstore'

export default function ProductList() {
    const products = [
        {
            id: 1,
            name: 'A상품',
            price: 1000,
        },
        {
            id: 2,
            name: 'B상품',
            price: 1500,
        },
        {
            id: 3,
            name: 'C상품',
            price: 2000,
        },
    ];

    // const { cart, setCart } = useContext(CartContext);///

    const dispatch = useDispatch();

    //추후 디스패치로 변경할 예정
    const addProduct = (product) => {
        // setCart([...cart, product]);
        dispatch({ type: ADD_CART, product });
    };

    return (
        <div>
            <h2>상품리스트</h2>
            {products.map((value) => {
                return (
                    <div key={value.id}>
                        <span>
                            {value.name} : {value.price}
                        </span>
                        <button onClick={() => addProduct(value)}>장바구니에 추가</button>
                    </div>
                );
            })}
        </div>
    );
}
