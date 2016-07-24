var http = require('http');
var server = http.createServer(function(request,response){

    response.writeHead(200);
    function aa(num){
        if (num%2==0){
            response.write("Number is even");
            console.log("Number is even");
        }
        else {
            response.write("NUmber is Odd");
            console.log("NUmber is Odd");
        }
    };
  aa(7);
    response.end();
}).listen(909);

