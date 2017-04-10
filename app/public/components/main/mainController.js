(function() {
  'use strict';

  function mainController($scope, $http) {
    var self = this;

    // Set all public methods of the controller
    self.array = array;
    self.init = init;
    self.createUser = createUser;
    self.deleteUser = deleteUser;
    self.getUsers = getUsers;

    self.users = [];
    self.selectedUser = [];

    init();

    $scope.userDetails={};

    // Initialize the app with list of users
    function init() {
      self.getUsers();
    }

    // Display a green, success status message with the given text
    function statusSuccess(text) {
      self.statusSuccess = text;
      self.statusFailure = '';
    }

    // Display a red, failure status message with the given text
    function statusFailure(text) {
      self.statusSuccess = '';
      self.statusFailure = text;
    }

    // Creates an empty array of length n (for use in HTML)
    function array(n) {
      return new Array(n);
    }

    // Gets all users
    function getUsers() {
      self.usersPlaceholder = 'Loading...';
      $http.get('/users/')
        .then(getUsersSuccess)
        .catch(getUsersFailure);
    }

    // Callback to be called if getUsers succeeds
    function getUsersSuccess(res) {
      self.userPlaceholder = '<none>';
      for (var i = 0; i < Object.keys(res.data).length; i++) {
        self.users[i] = res.data[i];
      }
    }

    // Callback to be called if getUsers fails
    function getUsersFailure(err) {
      self.usersPlaceholder = 'Error!';
      statusFailure('Failed to get users. ' + err.status);
      console.log(err);
    }

    // Creates a new user with the given name and password
    function createUser(username, password) {
      if (!username || !password) {
        statusFailure('Invalid name!');
        return;
      }

      $http.post('/users/' + username, {
        username: name,
        password: password
      }, {
        'Content-Type': 'application/json'
      }).then(createUserSuccess)
        .catch(createUserFailure);
    }

    // Callback to be called if createUser succeeds
    function createUserSuccess(res) {
      statusSuccess('Saved new user: ' + res.data.username);
      self.statusFailure = '';
      getUsers();
    }

    // Callback to be called if createUser fails
    function createUserFailure(err) {
      statusFailure('Failed to create user. ' + err.status);
      console.log(err);
    }

    // Deletes the given user
    function deleteUser(username) {
      $http.delete('/users/' + username)
        .then(deleteUserSuccess)
        .catch(deleteUserFailure);
    }

    // Callback to be called if deleteUser succeeds
    function deleteUserSuccess() {
      statusSuccess('User deleted.');
      getUsers();
    }

    // Callback to be called if deleteUser fails
    function deleteUserFailure(err) {
      statusFailure('Failed to delete user. ' + err.status);
      console.log(err);
    }
  }

  angular.module('main').controller('mainController', mainController);
})();