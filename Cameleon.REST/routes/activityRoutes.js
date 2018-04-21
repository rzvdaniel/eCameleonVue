var express = require('express');
var activityModel = require('../models/activityModel')

var routes = function (activitySchema) {

  const errorMessage = {
    Post: 'An error occured when adding the activity',
    Put: 'An error occured when updating the app',
    Patch: 'An error occured when updating the app',
    Delete: 'An error occured when deleting the activity',
    NotFound: 'No activity found'
  }

  var router = express.Router();

  router.route('/:appName')
    .get(function (req, res) {
      let ActivityModel = activityModel(req.params.appName)

      ActivityModel.find(function (err, activities) {
        if (err)
          res.status(500).send(err);
        else
          res.json(activities);
      })
    })
    .post(function (req, res) {
      console.log(req.params.appName)
      console.log(req.body)
      
      let ActivityModel = activityModel(req.params.appName)
      let activity = new ActivityModel(req.body)

      activity.save()
        .then(function (doc) {
          res.status(201).send(activity)
        })
        .catch(function (err) {
          res.status(500).send(errorMessage.Post)
        })
    })

  router.use('/:appName/:activityId', function (req, res, next) {
    let ActivityModel = activityModel(req.params.appName)

    ActivityModel.findById(req.params.activityId, function (err, activity) {
      if (err)
        res.status(500).send(err)
      else if (activity) {
        req.activity = activity
        next()
      }
      else {
        res.status(404).send('No activity found')
      }
    })
  })

  router.route('/:appName/:activityId')
    .get(function (req, res) {
      res.json(req.activity)
    })
    .put(function (req, res) {

      req.activity = Object.assign(req.activity, req.body);

      req.activity.save(function (err) {
        if (err)
          res.status(500).send(err)
        else
          res.json(req.activity)
      });
    })
    .delete(function (req, res) {
      req.activity.remove(function (err) {
        if (err)
          res.status(500).send(err)
        else
          res.status(204).send('Removed')
      })
    })

  return router;
};

module.exports = routes;