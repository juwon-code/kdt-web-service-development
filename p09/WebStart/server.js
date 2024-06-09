let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        // deprecated된 url 읽는 방법.
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
    }
    
    // http://localhost:8888
    http.createServer(onRequest).listen(8888);
}

// 외부에서 함수를 호출할 수 있게 한다.
exports.start = start;