var http = require("http")
var fs = require("fs")

var server = http.createServer((req,res)=>{
	console.log("someone connects via HTTP!")
	fs.readFile('index.html', 'utf-8',(error,data)=>{
		console.log(error)
		console.log(data)
		if(error){
			res.writeHead(500,{'content-type':'text/html'})
			res.end('Internal Server Error')
		}else{
			res.writeHead(200,{'content-type':'text/html'})
		}
	})
})

// console.log("the node file is working")
server.listen(8080);
console.log("Listening on port 8080");