var express = require('express');
var mongooseModel = require('../models/mongooseModel');

var routes = function(templateSchema) {

    var router = express.Router();
    var Template = mongooseModel.get('Template', templateSchema);
    
    router.route('/')
        .post(function(req, res) {
            var template = new Template(req.body);
            template.save();
            res.status(201).send(template);
        })
        .get(function(req, res) {
            Template.find(function(err, templates) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(templates);
            })
        });

    router.use('/:templateId', function(req, res, next) {
        Template.findById(req.params.templateId, function(err, template) {
            if(err)
                res.status(500).send(err);
            else if(template) {
                req.template = template;
                next();
            }
            else {
                res.status(404).send('No template found');
            }
        });
    });
    
    router.route('/:templateId')
        .get(function(req, res) {
            res.json(req.template);
        })
        .put(function(req, res) {
            req.template.name = req.body.name;
            req.template.active = req.body.active; 
            req.template.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.template);
            });
        })
        .patch(function(req, res) {
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body) {
                req.template[p] = req.body[p];
            }

            req.template.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.template);
            });
        })
        .delete(function(req, res) {
            req.template.remove(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });

    return router;
};

module.exports = routes;