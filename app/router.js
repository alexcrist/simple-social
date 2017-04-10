var express = require('express'),
    controller = require('./controller');

var router = express.Router();

router.route('/users')
  .get(controller.getAllUsers);

router.route('/users/:username')
  .get(controller.getUser)
  .post(controller.createUser)
  .delete(controller.deleteUser);

router.route('/users/:followee/follow')
  .post(controller.follow);

module.exports = router;