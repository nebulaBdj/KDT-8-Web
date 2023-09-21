// const Visitor = require('../model/Visitor.js');
import { getVisitors, writeVisitor, upVisitor, dVisitor } from '../model/Visitor.js';

const main = (req, res) => {
    res.render('index');
};

const Visitors = (req,res) => {
    getVisitors((result) => {
        console.log('Cvisitor.js :', result);
        res.render('visitor', { data: result });        
    })
    // console.log(getVisitors());
    // res.render('visitor', { data: getVisitors() });
};

const write_visitor = (req, res) => {
    console.log('방명록 추가');
    writeVisitor(req.body.name, req.body.comment, (result) => {
        res.send({id:result.insertId, name:req.body.name, comment: req.body.comment})
    })
}

const up_Visitor = (req, res) => {
    console.log('방명록 수정');
    upVisitor(req.body.name, req.body.comment, req.body.id, (result) => {
        res.send({result : true});
    });

}

const delete_Visitor = (req, res) => {
    console.log('방명록 삭제');
    dVisitor(req.body.identity, (result) => {
        res.send({result : true});
    });

}


const get_Visitors = (req,res) => {
    getVisitors((result) => {
        const id = req.params.id;
        const neyong = result;
        
        if(isNaN(id)) return res.render('404');
        if (id < 1 || id > result.length){
            return res.render('404');
        }
        console.log(result[id-1]);
        res.render('visitorone', { data : result[id-1]});
        // console.log('Cvisitor.js :', result);
        // res.render('visitor', { data: result });        
    })
};

// const edit_Visitors = (req,res) => {
//     getVisitors((result) => {
//         console.log('Cvisitor.js :', result);
//         res.render('visitor', { data: result });        
//     })
// };

// const delte_Visitors = (req,res) => {
//     getVisitors((result) => {
//         console.log('Cvisitor.js :', result);
//         res.render('visitor', { data: result });        
//     })
// };


export { main, Visitors, get_Visitors, write_visitor, up_Visitor, delete_Visitor}