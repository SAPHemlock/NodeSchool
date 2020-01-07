var express = require("express");
var app = express();

app.set("port", process.argv[2] || 3000);
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine(
  "jsx",
  require("express-react-views").createEngine({ transformViews: false })
);

require("babel/register")({
  ignore: false
});

// Generic URL to go to any index page. e.g. 'url/indexN'
app.use('/index*', function(req, res) {
    console.log(req.originalUrl);
    res.render(req.baseUrl.replace('/',''), "");
});

var data = [
    {title: 'Shopping', detail: process.argv[3]},
    {title: 'Hair cut', detail: process.argv[4]}
];
app.use('/', function(req, res) {
  res.render('index', {data: data});
});

// API routing: http://localhost:3000/index/2
// app.get('/index/:id', function(req , res){
//     res.render('index' + req.params.id, "");
// });

app.listen(app.get("port"), function() {
  console.log("Express server is up on port 3000");
});
