const fs = require('fs');
const mariadb = require('./database/connect/mariadb');

const mainView = fs.readFileSync('./main.html', 'utf-8');
const orderlistView = fs.readFileSync('./orderlist.html', 'utf-8');

function main(response) {
    console.log('main');

    // 제품의 전체 데이터 조회.
    mariadb.query('SELECT * FROM product', function(error, rows) {
        console.log(rows);
    });

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(mainView);
    response.end();
}

function redRacket(response) {
    fs.readFile('./img/redRacket.png', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
}

function blueRacket(response) {
    fs.readFile('./img/blueRacket.png', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
}

function blackRacket(response) {
    fs.readFile('./img/blackRacket.png', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
}

function order(response, productId) {
    const date = new Date().toISOString().slice(0, 10);

    mariadb.query('INSERT INTO orderlist VALUES (?, ?);', [productId, date], function(error, rows) {
        console.log(rows);

        response.writeHead(302, {'Location' : '/orderlist'});
        response.end();
    });
}

function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return year + '-' + month + '-' + day;
}

function orderlist(response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});

    console.log('OrderList 접근 요청됨');

    mariadb.query('SELECT * FROM orderlist', function(error, rows) {
        response.write(orderlistView);

        rows.forEach(element => {
            response.write('<tr>' 
                + '<td>' + element.product_id + '</td>' 
                + '<td>' + formatDate(element.order_date) + '</td>' 
                + '</tr>');
        });

        response.write('</table>');
        response.end();
    });
}

let handle = {}; // key:value로 이루어진 자료형.
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;

/* 이미지 경로 */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;