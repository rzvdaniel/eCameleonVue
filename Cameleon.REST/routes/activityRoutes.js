var express = require('express');
var activityModel = require('../models/activityModel')

var routes = function (activitySchema) {

    var router = express.Router();

    router.route('/')
        .get(function (req, res) {
            var Activity = activityModel(activitySchema, req.query.template);

            Activity.find(function (err, activities) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(activities);
            })
        })
        .post(function (req, res) {
            var Activity = activityModel(activitySchema, req.query.template);

            var activity = new Activity(req.body);
            activity.save();
            res.status(201).send(activity);
        });

    return router;
};

module.exports = routes;