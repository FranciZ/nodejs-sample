/**
 * Created by francizidar on 29/01/16.
 */

var express     = require('express');
var multipart   = require('connect-multiparty');
var fs = require('fs');
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')
var app = express();
var multipartMiddleware = multipart({ uploadDir: './public/images' });


exports.start = function(){

    app.use('/cms', express.static('cms-dev'));

    app.use('/images', serveIndex('./public/images'));
    app.use('/images', serveStatic('./public/images'));

    app.post('/upload', multipartMiddleware, function(req, res) {
        console.log(req.body, req.files);
        res.send('done');
        // don't forget to delete all req.files when done
    });

    app.listen(3000, function(){

        console.log('Server running');

    });

};