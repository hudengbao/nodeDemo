const { exec, escape }  = require('../db/mysql')
const {genPassword} = require('../utils/cryp')

const login = (username, password)=>{

    username = escape(username)
    password = genPassword(password)
    password = escape(password)

    let sql = `select * from users where username = ${username} and password = ${password};`

    return exec(sql).then(result=>{

        if(result.length >0){
            return result[0]
        }else{
            return false
        }
    })
}

module.exports = login