let express= require('express');
let bodyParser = require('body-parser');
let app=express();
//let apiRoutes=require("./api-routes")
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var  port= process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));

//pp.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
