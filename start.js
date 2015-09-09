// 模块调用声明  s为文件模块，path为系统路径模块
var fs = require('fs-extra');
var path = require('path');
// express() 表示创建express应用程序。简单几行代码其实就可以创建一个应用
var express = require('express');
var app = express();
var router = express.Router();
 
 

app.get('/', function (req, res) {
    res.render('main');
});

//解板views目录下的index.ejs?而不是其它目录下的文件，或者后其它后缀名的文件
app.set('views', path.join(__dirname));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.static(__dirname));
app.listen(3000);
 
console.log('visit http://localhost:3000');


/*// 模块调用声明  s为文件模块，path为系统路径模块
var fs = require('fs-extra');
var path = require('path');
// express() 表示创建express应用程序。简单几行代码其实就可以创建一个应用
var express = require('express');

var root = __dirname;
// console.log(root);

var app = express();
app.use(express.static(root));
app.get('/', function (req, res) {
    res.render('main');
});*/
/*fs.mkdirs(
    path.join(root, 'dep'),
    function () {
        fs.link(
            path.join(root, '..', '..', 'src'),
            path.join(root, 'dep', 'er'),
            function (err) {
                var app = express();
                app.use(express.static(root));
                app.get('/', function (req, res) {
                    res.render('main');
                });
                app.listen(3000);
                console.log(root);
                console.log('visit http://localhost:3000');
            }
        );
    }
);*/