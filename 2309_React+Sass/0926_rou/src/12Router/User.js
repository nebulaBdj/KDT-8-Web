import { Link, useSearchParams } from 'react-router-dom';

export const users = [
    {
        id: 1,
        name: '홍길동',
        comment: [
            {
                text: '안녕하세요',
            },
        ],
    },
    {
        id: 2,
        name: '이몽룡',
        comment: [
            {
                text: '반갑습니다',
            },
        ],
    },
    {
        id: 3,
        name: '임꺽정',
        comment: [
            {
                text: '어서오세요',
            },
        ],
    },
];

export default function User() {
    //서치파람즈는 쿼리스트링 값을 가져오는 것
    //셋서치는 쿼리스트링 값을 할당하는 것<< 주소를 만들때 사용

    const [searchParams, setSech] = useSearchParams();
    console.log(searchParams.get('mode'));
    //http://localhost:3000/user?name=hello << 이렇게 쳐야함
    setTimeout(()=>{
        setSech({mode:'Light'});
    }, 3000);

    return (
        <div>
            <ul>
                {users.map((value) => {
                    return (
                        <li key={value.id}>
                            <Link to={`/user/${value.id}`}>{value.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
