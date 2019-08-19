const express = require('express');
const router = express.Router();
const login = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

/* GET users listing. */
router.post('/login', (req, res, next) => {

  const {username, password} = req.body;

  return login(username, password).then(data=>{

      if(data){

          req.session.username = data.username
          req.session.password = data.realname

          res.json(new SuccessModel(data))
      }else{
          res.json(new ErrorModel("登录失败"))
      }
  })
});

module.exports = router;