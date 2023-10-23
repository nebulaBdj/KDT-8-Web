//자바스크립트의 경우
// function jsPrint (a, b) {
//     console.log(a),
//     console.log(b)
// }

//TS: 선언된 매개변수의 개수와 함수 호출 시 전달되는 파라미터의 개수가 동일해야한다.
// jsPrint(1, 2, 3)

function Print (a: number, b: number, c?: number): void {//리턴 안할떄는 보이드이다.
    console.log(a);
    console.log(b);
    console.log(c);
}

Print(1, 2, 3);
Print(1, 2);


function Print2 (a: number, b: number, c = 5)  {
    console.log('---------------------print2----------------------');
    console.log(a);
    console.log(b);
    console.log(c);
}

Print2(1,2,3);
Print2(1,2);

//void 말고 다른 리턴 타입
function concatStr(a:string, b:string): string {
    return a + b;
}

//함수 표현식
const squareArea = (a:number, b:number): number => {
    return a * b
}

const squareArea2 = (a:number, b:number): number => a*b

//함수 호출
console.log('문자열 더하기', + concatStr('hi','str'));
console.log('사각형 넓이 :', squareArea(1, 2));
console.log('사각형 넓이2 :', squareArea2(1, 2));

//never 타입
//never가 아닌 경우 특정 조건에서만 빶나갈 수 있고, 어떤 조건에서는 무한루프
//never 항상 함수 끝에 도달하지 않는 경우
function goingOn(a:number): never {
    while (true) {
        console.log('go');
        // if(a >10) breack; //에러
    }
}

//interface 선언 시 함수 타입 지정
interface Greet {
    name: string;
    hi():string;//함수의 리턴값이 스트링
    bye(a:number):string;
}

//------------------
//함수 오버로딩
//만들 함수 : 숫자가 오면 더하고 문자가 오면 이어주는 함수

// function add(a:string|number, b:string|number):string|number {
//     return a + b;?//에러: 문자+숫자인 경우가 올 수 있기 때문에
// }

//오버로딩: 함수의 매개변수의 개수, 타입/반환 탕빙이 다를때
// 
function add(a: string, b: string):string;
function add(a: number, b: number):number;
function add(a:any, b:any) {
    return a + b;
}

console.log(add(1, 2));
console.log(add('hello', 'my'));
console.log(add('1', '2'));

// console.log(add('1', 2));// 에러


//------------------함수의 타입을 설정하느 인터페이스-----------
interface Add {
    (a: number, b:number):number;
}

const sum: Add = function (num1, num2) {
    return num1 + num2;
}

interface Toy {
    name: string;
    start():void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

const toyCar : Toy & Car = {
    name: 'tayo',
    start(){
        console.log(this.name)
    },
    color: "blue",
    price: 23000,
};

toyCar.start(); //교차 타입

//type도 interface처럼 object로 선언 가능
type Person = {
    name: string;
    age?:number;
    like?:string[];
}

let person1: Person = {
    name: "person1",
    age: 20,
    like: ['blue', 'apple'],
};

