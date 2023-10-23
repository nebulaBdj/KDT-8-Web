// const { comment } = require("../controller/Cmain")

exports.commentInfos = () => {
    //sql문이 실행되었다 가정을 하고 반환
    return [
        {
            id: 1,
            userId: 'hello',
            date: '2023-08-01',
            comment: "안녕하세요~!!"
        },
        {
            id: 2,
            userId: 'hello2',
            date: '2023-08-01',
            comment: "안녕하세요~!!222"
        },
        {
            id: 3,
            userId: 'hello3',
            date: '2023-08-01',
            comment: "안녕하세요~!!333"
        },
        {
            id: 4,
            userId: 'hello4',
            date: '2023-08-01',
            comment: "안녕하세요~!!444"
        }
    ]
}