//async와 await은 항상 같이 사용한다.

let product;
let price;
exec();

function goMart(){
    console.log("마트에 와서 어떤 음료를 마실까");
}

function pickDrink() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("고민 끝!!");
            product = "사이다";
            price = 2000;
            let mymoney = 2000;
            if(price <= mymoney){
                resolve();
            }else{
                reject("돈이 부족해요");
            }
        }, 3000);
    })
}

function pay(){
    console.log(`상품명 : ${product}, 가격 : ${price}`);
}

async function exec() {
    goMart(); // 먼저 실행 1번
    await pickDrink(); // 2번
    pay();// 3번 pay가 pickDrink의 실행이 끝날때까지 기다려야 함으로 pickDrink 앞에 await을 붙여준다. 

}