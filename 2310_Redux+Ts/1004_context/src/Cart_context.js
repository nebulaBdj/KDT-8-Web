import {createContext, useState} from 'react';

//context
const MyCart = createContext();

//여기서 프로바이더를 만들면 된다. 아마 내가 프로바이더를 따로 안만들어서 값이 가지 않은 것 같다.
//provider component
export function CartProvider(props) {

    const [cart, setCart] = useState([]);

    return <MyCart.Provider value={{cart, setCart}}>{props.children}</MyCart.Provider>
}

export default MyCart;