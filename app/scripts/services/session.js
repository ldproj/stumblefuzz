'use strict';

angular.module('masterStumblefuzzApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
