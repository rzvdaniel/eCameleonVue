var express = require('express');
var activityModel = require('../models/system/activityModel')

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
            var Activity = mongooseModel.getCustom('Activity', activitySchema, req.body.template);

            var activity = new Activity(req.body);
            activity.save();
            res.status(201).send(activity);
        });

    router.use('/:userId', function (req, res, next) {
        User.findById(req.params.userId, function (err, user) {
            if (err)
                res.status(500).send(err);
            else if (user) {
                req.user = user;
                next();
            }
            else {
                res.status(404).send('No user found');
            }
        });
    });

    return router;
};

module.exports = routes;