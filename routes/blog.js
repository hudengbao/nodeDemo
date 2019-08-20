var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel")
const { getList, getDeatil, newBlog, updateBlog, deleteBlog } = require("../controller/blog")
const loginCheck = require('../middleware/loginCheck')


/* GET users listing. */
router.get('/list', (req, res, next)=>{

    let author = req.query.author || ''
    const keyword = req.query.keyword || ''

    return getList(author, keyword).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.get('/detail', (req, res, next)=>{

    const id = req.query.id || '';

    return getDeatil(id).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/add', loginCheck, (req, res, next)=>{
    const param = {
        title : req.body.title || '',
        content : req.body.content || '',
        author : req.session.username
    }

    return newBlog(param).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/update', loginCheck, (req, res, next)=>{

    const param = {
        id:  req.body.id || '',
        title: req.body.title || '',
        content: req.body.content || '',
        author: req.session.username
    }

    return updateBlog(param).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/delete', loginCheck, (req, res, next)=>{

    let author = req.session.username
    const id = req.body.id || ''

    return deleteBlog(id, author).then(data => {
        res.json(new SuccessModel(data))
    });
});

module.exports = router;
