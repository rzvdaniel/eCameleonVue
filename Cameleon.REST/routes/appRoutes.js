var express = require('express')
var appModel = require('../models/appModel')

const { check, validationResult } = require('express-validator/check')

var routes = function () {

    var router = express.Router()
    var AppModel = appModel('App', 'appPlugin', 'appSchema')

    const errorMessage = {
        Post: 'An error occured when adding the app',
        Put: 'An error occured when updating the app',
        Patch: 'An error occured when updating the app',
        Delete: 'An error occured when deleting the app',
        NotFound: 'No app found'
    }

    router.route('/')
        .post([
            check('name', 'The Name field is required').not().isEmpty(),
            check('title', 'The Title field is required').not().isEmpty()],
            function (req, res) {

                const errors = validationResult(req)

                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.mapped() })
                }

                var app = new AppModel(req.body)

                app.save()
                    .then(function (doc) {
                        res.status(201).send(app)
                    })
                    .catch(function (err) {
                        res.status(500).send(errorMessage.Post)
                    })

            })
        .get(function (req, res) {
            AppModel.find(function (err, apps) {
                if (err)
                    res.status(404).send(errorMessage.NotFound)
                else
                    res.json(apps)
            })
        })

    router.use('/:appId', function (req, res, next) {
        AppModel.findById(req.params.appId, function (err, app) {
            if (err)
                res.status(500).send(err)
            else if (app) {
                req.app = app
                next()
            }
            else {
                res.status(404).send(errorMessage.NotFound)
            }
        })
    })

    router.route('/:appId')
        .get(function (req, res) {
            res.json(req.app)
        })
        .put([
            check('name').not().isEmpty(),
            check('title').not().isEmpty()],
            function (req, res) {

                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.mapped() })
                }

                req.app.name = req.body.name
                req.app.title = req.body.title
                req.app.active = req.body.active
                req.app.image = req.body.image

                req.app.save(function (err) {
                    if (err)
                        res.status(500).send(errorMessage.Put)
                    else
                        res.json(req.app)
                })
            })
        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id

            for (var p in req.body) {
                req.app[p] = req.body[p]
            }

            req.app.save(function (err) {
                if (err)
                    res.status(500).send(errorMessage.Patch)
                else
                    res.json(req.app)
            })
        })
        .delete(function (req, res) {
            req.app.remove(function (err) {
                if (err)
                    res.status(500).send(errorMessage.Delete)
                else
                    res.status(204).send('Removed')
            })
        })

    return router
}

module.exports = routes