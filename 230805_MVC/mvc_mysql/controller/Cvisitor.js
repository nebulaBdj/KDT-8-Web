// const Visitor = require('../model/Visitor.js');
import { getVisitors } from '../model/Visitor.js';

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

const get_Visitors = (req,res) => {
    getVisitors((result) => {
        const id = req.params.id;
        const neyong = result;
        if(isNaN(id)) return res.render('404');
        if (id < 1 || id < result.length){
            return res.render('404');
        }
        console.log(result[id-1]);
        res.render('neyong', { neyongreal : result[id-1]});
        // console.log('Cvisitor.js :', result);
        // res.render('visitor', { data: result });        
    })
};

const edit_Visitors = (req,res) => {
    getVisitors((result) => {
        console.log('Cvisitor.js :', result);
        res.render('visitor', { data: result });        
    })
};

const delte_Visitors = (req,res) => {
    getVisitors((result) => {
        console.log('Cvisitor.js :', result);
        res.render('visitor', { data: result });        
    })
};


export{ main, Visitors, get_Visitors}