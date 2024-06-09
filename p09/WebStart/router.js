function route(pathname, handle, response) {
    console.log('pathname : ' + pathname);

    // 브라우저에서 favicon을 요청하므로 무시한다.
    if (pathname === '/favicon.ico') {
        console.log('favicon 무시.');
        return;
    }

    if (typeof handle[pathname] == 'function') {
        handle[pathname](response);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end();
    }
}

exports.route = route;