//1번
let olimpic_newGame: readonly [object, boolean];
olimpic_newGame = [
    {
        name: '쇼트',
        type: '혼성'
    },
    true,
]


//2번
interface Game { 
    title: string;
    price: number;
    desc ? : string;
    category: string;
    platform: string;
 }

 //3번
 function sum1(a:number, b:number): number {
    return a+b;
 }

 console.log( sum1(5,11) );

 //4번
 const sum2 = (a:number, b:number, c:number, d:number, e:number):number => {
    let arr1 = [a, b];
    let arr2 = [c, d, e];
    let sumarr = [...arr1, ...arr2];
    let result = 0;

    sumarr.forEach((val)=>{
        result += val;
    });

    return result;
 }

 // solution

 const sum2_sol = (...num: number[]):number => {
    //이게 어떻게 될까 >> ...num : 나머지 매개변수 , 남아있는 매갭ㄴ수들을 한데 모아 배열에 집어넣겠다
    // 그렇기 때문에 무조건 마지막에 넣어줘야한다.
    let result = 0;
    const sum = num.map((val)=> {
        result += val;
        return result;
    });// 리턴을 안했기 때문에 sum에 아무것도 안들어감 => 리턴 해주자
    console.log(sum);
    // return result;
    return sum[4];

 }

 console.log(sum2(1,2,3,4,10));
 console.log(sum2_sol(1,2,3,4,10));

 //5번

 function arrElement <T> (arr: T[], index: number) {
    let rebool:string;

    if(arr.length < index){
        return false;

    }else{
        rebool = `${arr[index]}`;
    }


    return rebool;
    
 }
 console.log('실습 5번',arrElement<string>(['a','b'], 1));
 console.log('실습 5번 false',arrElement<string>(['a','b'], 2));