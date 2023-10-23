import { useContext, useState } from "react";
import MyCart from "./Cart_context";


export default function Productlist () {    
    const [prolist, setProlist] = useState([]);
    
    const obj1 = [
        {
            id: 1,
            name: '떼밀이',
            price: 2500
        },
        {
            id: 2,
            name: '우유',
            price: 2000,
        },
        {
            id: 3,
            name: '초코에몽',
            price: 1200,
        }
    ]

    // setProlist(obj1 => [...obj1, prolist]);
    // setProlist(obj2 => [...obj2, prolist]);
    // setProlist(obj3 => [...obj3, prolist]);    

    const items = useContext(MyCart);

    const addPro = (product) => {
        items.setCart([...items.cart, product])
    }

    return(
        <>
            {obj1.map( value => {
                return (
                    <div key={value.id}>
                        <span>
                            {value.name} : {value.price}
                        </span>
                        <button onClick={()=>addPro(value)}>장바구니에 추가</button>
                    </div>
                )
            })}
        </>
    )

}