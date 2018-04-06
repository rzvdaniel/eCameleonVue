var express = require('express');
var activityModel = require('../models/activityModel')
var appModel = require('../models/appModel')

var routes = function (activitySchema) {

    var router = express.Router();

    router.route('/:appName')
        .get(function (req, res) {
            let appName = req.params.appName
            let AppModel = appModel(appName, appName + 'Plugin', 'activitySchema')
            
            AppModel.find(function (err, activities) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(activities);
            })
        })
        .post(function (req, res) {
            let appName = req.params.appName
            let AppModel = appModel(appName, appName + 'Plugin', 'activitySchema')
            let app = new AppModel(req.body)

            app.save()
                .then(function (doc) {
                    res.status(201).send(app)
                })
                .catch(function (err) {
                    res.status(500).send(errorMessage.Post)
                })

        })

    return router;
};

module.exports = routes;