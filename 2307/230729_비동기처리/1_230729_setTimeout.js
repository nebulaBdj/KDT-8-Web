// 1. setTimeout 사용해보기
// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 2000);
// console.log(3);

// 2. 비동기 처리를 통해 undefined 막기
let product;
let price;
goMart();
pickDrink();
pay(product, price);

function goMart(){
    console.log("마트에 와서 어떤 음료를 마실까");
}

function pickDrink() {
    setTimeout(function(){
        console.log("고민 끝!!");
        product = "사이다";
        price = 1500;
    }, 3000);
}

function pay(){
    console.log(`상품명 : ${product}, 가격 : ${price}`);
}

// PS C:\Users\82103\Documents\KDT-8-Web\230729_비동기처리> node 230729_setTimeout.js
// 마트에 와서 어떤 음료를 마실까
// 상품명 : undefined, 가격 : undefined
// 고민 끝!!
// 비동기 처리를 해야지 undefined 되는 것을 막을 수 있다.

