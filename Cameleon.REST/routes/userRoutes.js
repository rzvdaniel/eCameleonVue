var express = require('express');
var userModel = require('../models/userModel')

var routes = function () {

    var router = express.Router()
    var User = userModel()

    router.route('/')
        .get(function (req, res) {

            User.find(function (err, users) {
                console.log('Users = ' + users);
                if (err)
                    res.status(500).send(err);
                else
                    res.json(users);
            })
        })
        .post(function (req, res) {
            var user = new User(req.body);
            user.save();
            res.status(201).send(user);
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

    router.route('/:userId')
        .get(function (req, res) {
            res.json(req.user);
        })
        .put(function (req, res) {
            req.user.firstName = req.body.firstName;
            req.user.lastName = req.body.lastName;
            req.user.active = req.body.active;

            req.user.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.user);
            });
        })
        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id;

            for (var p in req.body) {
                req.user[p] = req.body[p];
            }

            req.user.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.user);
            });
        })
        .delete(function (req, res) {
            req.user.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });

    return router;
};

module.exports = routes;