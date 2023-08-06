// const express = require('express');
import express from 'express';
// const controller = require("../controller/Cvisitor");
import {main, Visitors, get_Visitors} from '../controller/Cvisitor.js';
const router = express.Router();


//기본주소
router.get('/', main);

//visitor
router.get('/visitor', Visitors);
router.get('/visitor/:id', get_Visitors);

// router.get('/visitor/write', Visitors);

// router.get('/visitor/edit', Visitors);

// router.get('/visitor/delte', Visitors);


export { router };



