angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('Markers', function($http) {

  var markers = [];

  return {
    getMarkers: function(){

      return $http.get("http://localhost:5000/assetMapper/api/meta").then(function(response){
          markers = response;
          return markers;
      });

    }
  }
})


.service('BlankService', [function(){

}]);
