// import { useContext } from 'react';
// import CartContext from './store/cart-context';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function Cart() {
    // const { cart } = useContext(CartContext);
    const cart = useSelector((state) => state);
    console.log(cart);
    //스토어를 찾아가서 state를 찾아옴

    //reduce: 배열의 모든 요소를 더할때 사용, 하나의 결과를 반환
    const totalPrice = cart.reduce((acc, val) => acc + val.price * val.quantity, 0);

    return (
        <div>
            <h2>장바구니</h2>
            {cart.map((value) => (
                <CartItem key={value.id} value={value} />
            ))}
            {totalPrice}
        </div>
    );
}
