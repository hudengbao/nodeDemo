const express = require('express');
const router = express.Router();
const login = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

/* GET users listing. */
router.post('/login', (req, res, next) => {

  const {username, password} = req.body;

  return login(username, password).then(data=>{

      if(data){

            //自动同步到redis中
          req.session.username = data.username
          req.session.password = data.realname

          console.log(req.session)

          res.json(new SuccessModel(data))
      }else{
          res.json(new ErrorModel("登录失败"))
      }
  })
});

router.post('/logout', (req, res, next) => {
    req.session.username = ''
    req.session.password = ''
    res.json(new SuccessModel('退出成功'))
});

module.exports = router;