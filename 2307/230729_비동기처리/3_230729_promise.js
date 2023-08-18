//프로미스 객체를 반환하는 프로미스 함수 정의
// function promise1 (flag){
//     return new Promise(function(resolve, reject) {
//         if(flag){
//             resolve("promise 상태는 fulfilled, then으로 연결, 이때 flag 값은 true");
//         }else{
//             reject("promise 상태는 rejected, catch로 연결, 이때 flag 값은 false");
//         }
//     });
// }

// console.log(promise1(true));
// console.log(promise1(false));

// promise1(false)
//     .then(function(result){
//         console.log(result);
//     }).catch(function(err){
//         console.log(err);
//     });

    // PS C:\Users\82103\Documents\KDT-8-Web\230729_비동기처리> node 230729_promise.js
    // promise 상태는 fulfilled, then으로 연결, 이때 flag 값은 true
    // PS C:\Users\82103\Documents\KDT-8-Web\230729_비동기처리> node 230729_promise.js
    // promise 상태는 rejected, catch로 연결, 이때 flag 값은 false
    // 실패하거나 성공한 결과값만 출력이 된다.


//===========================================
// 프로미스 객체 실행 
// let product;
// let price;
// goMart();
// pickDrink()
//     .then(pay)
//     .catch((err) => {
//         console.log(err);
//         // == function(err) {
//         //     console.log(err);
//         // }
//         // =>는 위 형태와 같은 역할 
//     });
// pay(product, price);

// function goMart(){
//     console.log("마트에 와서 어떤 음료를 마실까");
// }

// function pickDrink() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("고민 끝!!");
//             product = "사이다";
//             price = 2000;
//             let mymoney = 1500;
//             if(price <= mymoney){
//                 resolve();
//             }else{
//                 reject("돈이 부족해요");
//             }//2. reject에 대한 catch를 추가하여 다시 실행
//             // resolve();//1. 리졸브로만 프로미스 객체를 호출 
//         }, 3000);
//     })
// }

// function pay(){
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// ====================================================================


// //체이닝을 사용 안 한 경우
// //(4+3)*2-1

// function add(n1, n2, callback){
//     setTimeout(function(){
//         let result = n1 + n2;
//         callback(result);
//     },1000);
// }

// function mul(n, callback){
//     setTimeout(function(){
//         let result = n *2;
//         callback(result);
//     },700);
// }

// function sub(n, callback){
//     setTimeout(function(){
//         let result = n -1;
//         callback(result);
//     },500);
// }

// //add
// add(4, 3, function(x){
//     console.log("1 : ", x)
//     mul(x, function(y){
//         console.log("2 :", y);
//         sub(y, function(z){
//             console.log("3 :", z);
//         })
//     })
// })

//Promise 체이닝
//장점 : tnen 메서드를 연속해서 쓸 수 있다. > 순차적인 작업이 가능하다.
//예외처리도 마지막에 catch로 지정하면 되기 때문에 간편하다.

function add(n1, n2){
    return new Promise(function(resolve,reject){
        setTimeout(function(result) {
            result = n1 + n2;
            resolve(result);
            // callback(result);
        },1000);
    });

}

function mul(n){
    return new Promise(function(resolve,reject){
        setTimeout(function(result) {
            result = n *2;
            resolve(result);
            // callback(result);
        },700);        
    });

}

function sub(n){
    return new Promise(function(resolve,reject){
        setTimeout(function(result) {
            result = n -1;
            // resolve(result);
            // callback(result);
            reject(new Error("에러처리"));// 에러 객체 만들어서 에러 처리하기
            // PS C:\Users\82103\Documents\KDT-8-Web\230729_비동기처리> node 230729_promise.js
            // 1 :  7
            // 2 :  14
            // Error: 에러처리
            //     at Timeout._onTimeout (C:\Users\82103\Documents\KDT-8-Web\230729_비동기처리\230729_promise.js:140:20)
            //     at listOnTimeout (node:internal/timers:569:17)
            //     at process.processTimers (node:internal/timers:512:7)
        },500);        
    });

}

//add
add(4, 3).then(function(result){
    console.log("1 : ", result);
    //then을 연속적으로 쓸려면 여기서 값을 반환해줘야한다.
    return mul(result);    
}).then(function(result){
    console.log("2 : ", result);
    //then을 연속적으로 쓸려면 여기서 값을 반환해줘야한다.
    return sub(result);    
}).then(function(result){
    console.log("3 : ", result);    
}).catch(function(err){
    console.log(err);
});