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


var port = process.env.PORT || 8080;

exports.start = function(){

    app.use('/cms', express.static('./public/cms'));

    app.use('/images', serveIndex('./public/images'));
    app.use('/images', express.static(' ./public/images'));

    app.post('/upload', multipartMiddleware, function(req, res) {
        console.log(req.body, req.files);
        res.sendStatus(200);
        // don't forget to delete all req.files when done
    });

    app.listen(port, function(){

        console.log('Server running');

    });

};