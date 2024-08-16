var staticServer=require('static-server');
var server =new staticServer({
    rootPath:'./dist/',
    port:1337
});

//a message that notify you that the server starts

server.start(function(){
    console.log('server listening to ',server.port);
});