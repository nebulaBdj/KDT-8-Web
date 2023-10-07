// 튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ['cola', 2000];

// 튜플 선언, 초기화
let drink2: [string, number] = ['cola', 2000];

// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);
// spread 연산자도 사용 가능
console.log([...drink2, '콜라공장']);

// readonly : 데이터 변경X
let drink3: readonly [string, number] = ['cola', 2000];
// drink3.push("콜라공장"); // error

// -------------enum------------------------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = 'americano',
  latte = 'latte',
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  chocolate, // 0
  vanilla, // 1
  strawberry, // 2
  kiwi = 'kiwi', // 숫자와 문자열 같이 쓸 수 있음(이왕이면 통일하게 좋다)
}

console.log(Cake.chocolate);
console.log(Cake.vanilla);


//사용자 정의 타입 
//1.interface

interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "황동준",
  isPassed: false,
}

//2. type
type Score = "A+" | "A" | "B" | "C" | "D"

const score1: Score = "A"
// const score1: Score = "F"//에러

//interface 상속도 가능
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  //key-value 타입이 여러개 올 수 있을 때
  //grade라는 이름이 key가 되는 것은 아니며 의미를 부여해주는 역할이다.
  [grade : number]: Score;
  readonly backNumber? : number;//뒤에  ?를 넣음으로 들어올수도 있고 안들어올수도 있음을 표시 = 필수값이 아니라면 ? 표시
  // readonly를 적어서 변경 방지 가능
}

const tiger : 야구부 = {
  name: '상속을 받았기 때문에 야구부에 안적어도 name이 존재한다.',
  isPassed: true,
  position: 'pit',
  weight: 90,
  height: 180,
  1: 'A',
  2: 'B',
}

console.log(tiger);
//점 접근법 또는 대괄호 접근법으로 value 변경 가능;
tiger["1"] = "C";
tiger.position = "liner";
// tiger.backNumber =//에러
console.log('변경 후', tiger);