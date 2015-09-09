var express = require('express');
var router = express.Router(); 
 
/* GET home page. */
router.get('/', function (req, res, next) { 
console.log('~~~~~~~~~');
   /* var fs = require('fs');
    fs.readdir(media, function (err, names) {
    	console.log('~~~~~~~~~',media);
        if (err) {
            console.log(err);
        } else {       	 
        	 
            res.render('index', {
                title: 'music'
            });

        }

    });*/
});




module.exports = router;