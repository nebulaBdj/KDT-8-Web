const db = require('../models');
const models = db.User;

let todolist;

const set = async () => {
    todolist = await models.todo.findAll({});
}

const get_todo = async (req, res) => {
    
    await set();

    const tododata = await todolist;
    const todoarr = {};

    tododata.forEach((data) => {
        todoarr[data.id - 1] = {
            id : data.id,
            title: data.title,
            done: data.done,
        }
    });

    console.log('Ctodo에서 데이터 받아오는지 확인')
    // console.log(tododata);
    console.log(todoarr);
    
    res.json(todoarr);


}

const post_todo = async (req, res) => {
    const update_todo = req.body;
    console.log('보내는 데이터',update_todo);
    // res.send(update_todo);

    await models.todo.create(update_todo);

    const update_title = update_todo.title;

    console.log(update_title);

    //하나씩 찾아올 것이기 때문에 여러개의 투두리스트를 모아서 보내는 방식이 아닌
    //투두리스트를 적고 엔터가 업로드 버튼을 누를때마다 하나씩 보내주고 받아오는 방식 
    const todo_upload = await models.todo.findOne({
        where: {title : update_title},
    });

    console.log('가져온 데이터',todo_upload);
    //이 데이터는 기존 페이지를 유지하면서 기존 리스트 아래로 들어가야한다. 

    // let update_text = {
    //     id: todo_upload.id,
    //     title: todo_upload.title,
    //     done: todo_upload.done,
    // };

    // console.log(update_text);

    //위에 주석 처리한거 없어도 객체 형태로 잘가네
    res.json(todo_upload);


}


const del_todo = async (req, res) => {
    const list_id = req.params.todoId;
    console.log('삭제할 튜플의 아이디', list_id);

    await models.todo.destroy({
        where: {id : list_id},
    })
}

const patch_todo = async (req, res) => {
    const list_id = req.params.todoId;
    console.log('수정할 튜플의 id', list_id);

    console.log('수정할 데이터',req.body);

    const update_data = {
        id : list_id,
        title : req.body.title,
        done : req.body.done,
    }

    console.log('받은 데이터 객체화 완료', update_data);

    const update_title = req.body.title;
    const update_done = req.body.done;


    try {
        await models.todo.update({
            title : update_title,
            done : update_done,
        },
        { where :  { id : list_id},}
        );        
    } catch (error) {
        console.log('에러임');
    }


    res.json({result : true});

}

module.exports = {
    get_todo,
    post_todo,
    del_todo,
    patch_todo,
};
