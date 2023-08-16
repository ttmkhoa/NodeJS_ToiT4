const express = require('express')

const app = express();

const port = 3000;

app.get('/', function(request, response){
    response.send('Hello World from express framwwork')

});

app.listen(port, function(){
    console.log('Server listening on http://localhost:'+port);
});

//them ghi chu
//them code