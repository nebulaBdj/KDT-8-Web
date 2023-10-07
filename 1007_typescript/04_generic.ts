function getValue(str:string):string {
    // 모든 값이 들어올 수 있는 함수다 -> 제네릭 타입 사용
    return str;
}

function arrLength(arr: any[]) : number {
    return arr.length;
}//any 사용은 지양해야한다

//제네릭 사용해서 바꾸기
function getValue2<T>(val: T): T {
    return val;
}

function arrLength2<T>(arr: T[]): number {
    return arr.length;
}

console.log(getValue2<string>('string'));
console.log(arrLength2<string>(['a']));
console.log(arrLength2<number>([1, 2, 3, 4]));

function printSome <T>(x:T, y:T): T {
    console.log(x);
    console.log(y);
    // return x+y; // number, string 0 boolean, null x
    return x;    
}

printSome<string>('hi', 'hello');
// printSome<number>(10, 'hello'); 불가함
function printSome2<T, K>(x : T, y : K) {
    console.log(x);
    console.log(y);
}

printSome2<string, number>('1',1); //이렇게 여러가지 타입 설정이 가능하다.