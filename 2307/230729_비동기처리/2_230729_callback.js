//콜백함수 사용 예시
// 메인 함수, 함수 타입 파라미터 맨 마지막에 하나 더 선언

// function mainFunc(parm1, parm2, callback) {
//     //콜백 함수에 결과 전달
//     const result = parm1 + parm2;
//     console.log("main")
//     callback(result);
// }

// function callbackFunc(parm){
//     console.log(parm);
// }

// mainFunc(1,2,callbackFunc);

// //==========================================================

// let product;
// let price;
// goMart();
// pickDrink(pay);// 3. pickDrink 함수 실행 후 콜백 함수로 pay를 받는다.
// // pay(product, price);

// function goMart(){
//     console.log("마트에 와서 어떤 음료를 마실까");
// }

// function pickDrink(callback) {
//     setTimeout(function(){
//         console.log("고민 끝!!");
//         product = "사이다";
//         price = 1500;
//         callback(product, price)//1. pickDrink에서 구한 값을 콜백함수를 통해 인자로 넘겨준다.
//     }, 3000);
// }

// function pay(product, price){// 2. callback에 있는 인자를 넘겨 받는다.
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

//==================================================================

// 콜백 지옥
// 1초마다 배경색이 변경되는 코드
// 빨 > 주 > 노 > 초 > 파
setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "orange";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "yellow";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "green";
                setTimeout(function(){
                    document.querySelector("body").style.backgroundColor = "blue";
                    //처음봤을때 코드가 어떤 코드인지 이해하기가 어렵고 코드를 수정할때 어디서 수정해야하는지 헷갈릴 수 있다.
                },1000)   
            },1000)
        },1000)
    },1000)
},1000);