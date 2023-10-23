import { useContext, useState } from "react";
import MyCart from "./Cart_context";


export default function Cartlist ({value}) {    

    const {cart, setCart} = useContext(MyCart);

    const removeCart = (id) => {
        // 제거할려면 직접 수정을 못하기 때문에 새로운 배열을 반환해준다.
        setCart(cart.filter((e)=> e.id !== id) )
    }

    return (
        <>
            <div key={value.id}>
                <span>
                    {value.name} : {value.price}
                </span>
            </div>
            <button onClick={()=>removeCart(value.id)}>제거</button>
        </>
    )

}