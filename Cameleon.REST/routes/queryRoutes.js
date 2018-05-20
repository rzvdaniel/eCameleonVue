var express = require('express');
var activityModel = require('../models/activityModel')

var routes = function (activitySchema) {

  const errorMessage = {
    Get: 'An error occured when retrieving the result',
    Post: 'An error occured when adding the activity',
    Put: 'An error occured when updating the app',
    Delete: 'An error occured when deleting the activity',
    NotFound: 'No activity found'
  }

  var router = express.Router();

  router.route('/:appName/:query/:projection')
    .get(function (req, res) {
      let ActivityModel = activityModel(req.params.appName)
      let queryObject = JSON.parse(req.params.query)
      let projectionObject = JSON.parse(req.params.projection)

      ActivityModel.find(queryObject, projectionObject, (error, item) => {
          if (error) {
            console.log(errorMessage.Get);
          }
          res.json(item)
        })
    })

  router.route('/:appName')
    .post(function (req, res) {      
      let ActivityModel = activityModel(req.params.appName)
      let activity = new ActivityModel(req.body)

      console.log('--------activity--------')
      console.log(req.body)

      activity.save()
        .then(function (doc) {
          res.status(201).send(activity)
        })
        .catch(function (err) {
          res.status(500).send(errorMessage.Post)
        })
    })

  router.route('/:appName/:query')
   
    .put(function (req, res) {
        let ActivityModel = activityModel(req.params.appName)
        let queryObject = JSON.parse(req.params.query)
        let projectionObject = req.body

        ActivityModel.update(queryObject, projectionObject, (error, item) => {
            if (error) {
              console.log(error);
            }
            res.json(item)
          })
    })
    .delete(function (req, res) {
      let ActivityModel = activityModel(req.params.appName)
      let queryObject = JSON.parse(req.params.query)

      ActivityModel.deleteMany(queryObject, (err) => {
        if (err)
          res.status(500).send(err);
        else
          res.status(204).send('Removed');
      });
    });

  return router;
};

module.exports = routes;