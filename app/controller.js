var User = require('./User.js');

function getUsers (req, res) {
  // TODO - fill out
  res.status(200);
}

function getUser(req, res) {
  var username = req.params.username;

  User.findOne({ username: username })
    .then(function (user) {
      res.status(200).send(user);
    })
   .catch(function (err) {
      res.status(500).send(err);
    });
}

function createUser (req, res) {
  var username = req.params.username;
  var password = req.body.password;

  if (!username || !password) {
    res.status(500).send('Must provide username and password.');
    return;
  }

  User.find({ username: username })
    .then(function (users) {
      if (users.length > 0) {
        res.status(500).send('Duplicate username.');
      } else {
        User.create({
          username: username,
          password: password,
          followers: [],
          following: []
        }).then(function (user) {
          res.status(200).send(user);
        })
        .catch(function (err) {
          console.log(err);
          res.status(500).send(err);
        });
      }
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
}

function deleteUser(req, res) {
  var username = req.params.username;

  User.remove({ username: username })
    .then(function (user) {
      res.status(200).send(user);
    })
    .catch(function (err) {
      res.status(500).send(err);
    })
}

function follow (req, res) {
  var followee = req.params.followee;
  var follower = req.body.follower;

  isFollowing(followee, follower)
    .then(function () {
      var follow = User.findOneAndUpdate({
        username: followee
      }, {
        $push: { followers: follower }
      });

      var getFollowed = User.findOneAndUpdate({
        username: follower
      }, {
        $push: { following: followee }
      });

      Promise.all([follow, getFollowed])
        .then(function () {
          res.sendStatus(200);
        })
        .catch(function (err) {
          // TODO - handle situation where only one works
          res.status(500).send(err);
        });
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
}

function isFollowing(followee, follower) {
  return new Promise(function (resolve, reject) {
    User.findOne({ username: follower })
      .then(function (user) {
        if (user.following.includes(followee)) {
          reject('Already following.');
        } else if (user.username == followee) {
          reject('Cannot follow yourself.');
        } else {
          resolve();
        }
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

function unfollow (req, res) {
  // TODO - fill out
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  createUser: createUser,
  deleteUser: deleteUser,
  follow: follow
};