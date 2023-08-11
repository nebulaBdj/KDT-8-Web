const {Student, StudentProfile, Classes} = require('../models')
// 구조 분해 할당으로 값을 넣어줘서 model.~로 안하게함 사실 import를 쓰면 됨

exports.index = (req, res) => {
    res.render('index');
}

//학생 생성
exports.post_student = async (req, res) =>{
    
    try{
        const {userid, password, email, name, major, enroll} = req.body;
        const user = await Student.create({
            userid,
            password,
            email,
            StudentProfile: {
                name,
                major,
                enroll,
            },
        }, {include : StudentProfile}
        );
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
    

}
exports.post_class = async (req, res) =>{
    try{
        const {name, room, code, teacher_name, StudentId} = req.body
        const classes = await Classes.create({
            name,
            room,
            code,
            teacher_name,
            StudentId,
        })
    } catch(error){

    }
}

exports.get_student = async (req, res) => {
    try {
        const student = await Student.findAll({ 
            attributes: ['userid', 'email'], 
            include: [{model: StudentProfile, attributes: ['major', 'enroll']}]
        });
        res.send(student);
    } catch (error) {
        console.log(err);
    }
}