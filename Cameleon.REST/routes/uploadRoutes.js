var express = require('express');
var formidable = require('formidable');

var routes = function () {

  var router = express.Router();

  router.route('/:upload')
    .post(function (req, res) {      
      
      res.status(201).send()
      
      var form = new formidable.IncomingForm();

      form.parse(req);

      form.on('fileBegin', function (name, file){
          file.path = __dirname + '/uploads/' + file.name;
      });

      form.on('file', function (name, file){
          console.log('Uploaded ' + file.name);
      });

      res.status(201).send()

    })

  return router;
};

module.exports = routes;