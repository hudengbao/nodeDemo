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

module.exports = router;
