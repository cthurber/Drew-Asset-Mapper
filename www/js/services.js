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

// .factory('Markers', function ($http, $q) {
//
//     return {
//         getMarkers: function() {
//             // the $http API is based on the deferred/promise APIs exposed by the $q service
//             // so it returns a promise for us by default
//             return $http.get('/api/meta')
//                 .then(function(response) {
//                     if (typeof response.data === 'object') {
//                         return response.data;
//                     } else {
//                         // invalid response
//                         return $q.reject(response.data);
//                     }
//
//                 }, function(response) {
//                     // something went wrong
//                     return $q.reject(response.data);
//                 });
//         }
//     };
// });
