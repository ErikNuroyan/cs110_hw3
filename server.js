const http=require("http");

const NewServer=http.createServer(function(req,res){
if(req.url==="/First"){
res.writeHead(200);
res.end("This is the first one");
}
else if(req.url==="/Second"){
res.writeHead(200);
res.end("This is the second one");
}
else if(req.url==="/Third"){
res.writeHead(200);
res.end("This is the third one");
}
else if(req.url==="/Four"){
res.writeHead(200);
res.end("This is the fourth one");
}
else if(req.url==="/"){
res.writeHead(200);
res.end("Starting page !!!");
}
else {
res.writeHead(404);
res.end("Oops,wrong URL :(");

}
});

NewServer.listen(7777);