angular.module('app.services', [])

.service('Markers', function ($http) {
  var cachedResponse;

  this.getStuff = function () {
    if (cachedResponse) {
      return cachedResponse;
    }

    return $http.get('/api/meta')
      .then(function (response) {
        cachedResponse = response;
        return response.data; // Return the response of your $http call.
      });
  };
});
