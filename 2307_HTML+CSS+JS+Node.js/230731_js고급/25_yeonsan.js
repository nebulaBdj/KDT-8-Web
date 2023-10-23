//spread 연산자

//기존에 배열 합치는 방법
const a = [1,2,3];
const b = [4,5];
const con =a.concat(b);

// spread 사용
const spread = [...b, ...a];

console.log(con);
console.log(spread);

//객체도 가능
const person = {
    name : "dj",
    age : 28,
}

console.log({...person});
const c = 'Hello';
console.log({...c});

function get(z,q,...rest){
    console.log(z);
    console.log(q);
    console.log(rest);
}
get(10,20,30,40,50);

//클래스 : 요즘은 많이 사용하지 않는다.

