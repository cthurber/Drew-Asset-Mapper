angular.module('app.services', [])



.factory('BlankFactory', [function(){

}])

.factory('Markers', function($http) {

  var markers = [];

  return {
    getMarkers: function(){

      return $http.get("/api/meta").then(function(response){
          markers = response;
          console.log(typeof(markers));
          return markers;
      });

    }
  }
})


.service('BlankService', [function(){

}]);
