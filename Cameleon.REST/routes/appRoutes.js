var express = require('express');
var mongooseModel = require('../models/mongooseModel');

var routes = function(appSchema) {

    var router = express.Router();
    var App = mongooseModel.get('App', appSchema);
    
    router.route('/')
        .post(function(req, res) {
            var app = new App(req.body);
            app.save();
            res.status(201).send(app);
        })
        .get(function(req, res) {
            App.find(function(err, apps) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(apps);
            })
        });

    router.use('/:appId', function(req, res, next) {
        App.findById(req.params.appId, function(err, app) {
            if(err)
                res.status(500).send(err);
            else if(app) {
                req.app = app;
                next();
            }
            else {
                res.status(404).send('No app found');
            }
        });
    });
    
    router.route('/:appId')
        .get(function(req, res) {
            res.json(req.app);
        })
        .put(function(req, res) {
            req.app.name = req.body.name;
            req.app.active = req.body.active; 
            req.app.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.app);
            });
        })
        .patch(function(req, res) {
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body) {
                req.app[p] = req.body[p];
            }

            req.app.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.app);
            });
        })
        .delete(function(req, res) {
            req.app.remove(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });

    return router;
};

module.exports = routes;