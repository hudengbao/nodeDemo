const env = process.env.NODE_ENV;

let MYSQL_CONF;

if(env === 'development'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '111111',
        port: '3306',
        database: 'myblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

if(env === 'producation'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '111111',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}