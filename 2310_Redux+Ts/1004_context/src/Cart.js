import { useContext, useState } from "react";
import MyCart from "./Cart_context";
import Cartlist from "./Cartlist";

export default function Cart () {//PROPS를 안줘서 값이 안가는 거였다.

    const {cart} = useContext(MyCart);

    const totalPrice = cart.reduce((acc,val) => acc + val.price, 0)
    //reduce() : 배열에 있는 값을 모두 더할때 사용

    return <div>
        <h2>장바구니</h2>
        {cart.map((value) => {
            return (
            <Cartlist value={value} />
            )
        })}
        <br />
        <p>가격 총합 : {totalPrice}</p>
    </div>

    // const Cartlist = useContext(MyCart);
    // const Productlist = useContext(MyProduct);

    // return<>
    //     <div>
    //         <h2>상품 목록</h2>
    //         <ul>
    //             <li>{Productlist[0]}<button>상품 추가</button></li>
    //             <li>{Productlist[1]}<button>상품 추가</button></li>
    //             <li>{Productlist[2]}<button>상품 추가</button></li>
    //         </ul>
    //         <h2>장바구니 목록</h2>
    //         <ul>

    //         </ul>
    //     </div>
    // </>
}