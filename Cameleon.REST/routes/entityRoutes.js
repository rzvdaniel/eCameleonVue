var express = require('express');
var mongooseModel = require('../models/mongooseModel');

var routes = function(entitySchema) {

    var router = express.Router();
    var Entity = mongooseModel.getSystem('Entity', entitySchema, 'entityPlugin');

    router.route('/')
        .get(function(req, res) {

            Entity.find(function(err, entities) {
                console.log('Entities = ' + entities);
                if(err)
                    res.status(500).send(err);
                else
                    res.json(entities);
            })
        })
        .post(function(req, res) {
            var entity = new Entity(req.body);
            entity.save();
            res.status(201).send(entity);
        });

    router.use('/:entityId', function(req, res, next) {
        Entity.findById(req.params.entityId, function(err, entity) {
            if(err)
                res.status(500).send(err);
            else if(entity) {
                req.entity = entity;
                next();
            }
            else {
                res.status(404).send('No entity found');
            }
        });
    });
    
    router.route('/:entityId')
        .get(function(req, res) {
            res.json(req.entity);
        })
        .put(function(req, res) {
            req.entity.firstName = req.body.firstName;
            req.entity.lastName = req.body.lastName;         
            req.entity.active = req.body.active;

            req.entity.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.entity);
            });
        })
        .patch(function(req, res) {
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body) {
                req.entity[p] = req.body[p];
            }

            req.entity.save(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.entity);
            });
        })
        .delete(function(req, res) {
            req.entity.remove(function(err) {
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });

    return router;
};

module.exports = routes;