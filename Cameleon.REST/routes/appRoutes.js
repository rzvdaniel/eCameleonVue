var express = require('express')
var mongooseModel = require('../models/mongooseModel')
var serverError = require('../errors/serverError')

const { check, validationResult } = require('express-validator/check')

var routes = function(appSchema) {

    var router = express.Router()
    var App = mongooseModel.getSystem('App', appSchema, 'appPlugin')
    
    router.route('/')
        .post([
            check('name', 'The Name field is required').not().isEmpty(),
            check('title', 'The Title field is required').not().isEmpty()],
            function(req, res) {

                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    const message = 'Please check the input data.'
                    const error = serverError.get(message, errors.mapped())
                    res.status(500).send(error)
                }

                var app = new App(req.body)
                app.save()
                    .then(function (doc) {
                        res.status(201).send(app)
                    })
                    .catch(function (err) {
                        const message = 'An error occured when adding the app.'
                        const error = serverError.get(message)
                        res.status(500).send(error)
                    })
               
        })
        .get(function(req, res) {
            App.find(function(err, apps) {
                if(err)
                    res.status(500).send(err)
                else
                    res.json(apps)
            })
        })

    router.use('/:appId', function(req, res, next) {
        App.findById(req.params.appId, function(err, app) {
            if(err)
                res.status(500).send(err)
            else if(app) {
                req.app = app
                next()
            }
            else {
                res.status(404).send('No app found')
            }
        })
    })
    
    router.route('/:appId')
        .get(function(req, res) {
            res.json(req.app)
        })
        .put([
            check('name').not().isEmpty(),
            check('title').not().isEmpty()],
            function(req, res) {
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.mapped() })
                }

                req.app.name = req.body.name
                req.app.title = req.body.title
                req.app.active = req.body.active
                req.app.image = req.body.image

                req.app.save(function(err) {
                    if(err)
                        res.status(500).send(err)
                    else
                        res.json(req.app)
                })
        })
        .patch(function(req, res) {
            if(req.body._id)
                delete req.body._id

            for(var p in req.body) {
                req.app[p] = req.body[p]
            }

            req.app.save(function(err) {
                if(err)
                    res.status(500).send(err)
                else
                    res.json(req.app)
            })
        })
        .delete(function(req, res) {
            req.app.remove(function(err) {
                if(err)
                    res.status(500).send(err)
                else
                    res.status(204).send('Removed')
            })
        })

    return router
}

module.exports = routes