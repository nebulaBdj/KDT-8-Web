// const express = require('express');
import express from 'express';
// const controller = require("../controller/Cvisitor");
import {main, Visitors, get_Visitors, write_visitor, up_Visitor, delete_Visitor} from '../controller/Cvisitor.js';
const router = express.Router();


//기본주소
router.get('/', main);

//visitor
router.get('/visitor', Visitors);

router.get('/visitorone/:id', get_Visitors);

router.post('/visitor/write', write_visitor);

router.patch('/visitor/edit', up_Visitor);

router.delete('/visitor/deltela', delete_Visitor);


export { router };



