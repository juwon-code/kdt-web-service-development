const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    // 제품의 전체 데이터 조회.
    mariadb.query('SELECT * FROM product', function(error, rows) {
        console.log(rows);
    });

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main Page');
    response.end();
}

function login(response) {
    console.log('login');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login Page');
    response.end();
}

let handle = {}; // key:value로 이루어진 자료형.
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;