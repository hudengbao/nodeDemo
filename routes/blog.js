var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel")
const { getList, getDeatil, newBlog, updateBlog, deleteBlog } = require("../controller/blog")


/* GET users listing. */
router.get('/list', function(req, res, next) {

    let author = req.query.author || ''
    const keyword = req.query.keyword || ''

    return getList(author, keyword).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.get('/detail', function(req, res, next) {

    const id = req.query.id || '';

    return getDeatil(id).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/add', function(req, res, next) {

    console.log(req.body)

    const param = {
        title : req.body.title || '',
        content : req.body.content || '',
        author : 'lisi'
    }

    return newBlog(param).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/update', function(req, res, next) {

    const param = {
        id:  req.body.id || '',
        title: req.body.title || '',
        content: req.body.content || '',
        author: 'lisi'
    }

    return updateBlog(param).then(data => {
        res.json(new SuccessModel(data))
    });
});

router.post('/delete', function(req, res, next) {

    let author = 'lisi'
    const id = req.body.id || ''

    return deleteBlog(id, author).then(data => {
        res.json(new SuccessModel(data))
    });
});

module.exports = router;
