var express = require("express");
var app = express();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require("browserify");
var babelify = require("babelify");

app.set("port", process.argv[2] || 3000);
// app.set("view engine", "jsx");
app.set("node", "jsx");

app.set("views", __dirname + "/views");
app.engine(
  "jsx",
  require("express-react-views").createEngine({ transformViews: false })
);

// require("babel/register")({
//   ignore: false
// });
require('babel/register');
var TodoBox = require('./views/index.jsx');

app.use('/bundle.js', function (req, res) {
    res.setHeader('Content-Type', 'application/javascript');

    browserify("./app.js")
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(res);
});

app.use('/', function (req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({src: '/bundle.js'})
    ));

    res.end(html);
});

// Generic URL to go to any index page. e.g. 'url/indexN'
app.use("/index*", function(req, res) {
  console.log(req.originalUrl);
  res.render(req.baseUrl.replace("/", ""), "");
});
