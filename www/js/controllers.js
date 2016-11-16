angular.module('app.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.result = "";
  $http.get('http://localhost:5000/assetMapper/api/meta')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
.controller('homeCtrl', ['$scope', '$state', '$stateParams', '$ionicSideMenuDelegate', 'Markers',
function ($scope, $state, $stateParams, $ionicSideMenuDelegate, Markers) {
  // $scope.Markers;
  $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false); //Disable side scrolling opening up side menu (Jon, Ryan)
    });

var mymap = L.map('mapid').setView([40.76804,-74.235692], 14); //Set map name and default view location/zoom level
    var userMarker;
    var userCircle;
    var userIcon;
    var inBound;
    var maxLat = 40.81;
    var minLat = 40.75;
    var maxLong = -74.275;
    var minLong = -74.205;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //Initialize map with mapbox streets tileset and min/max zoom level
    attribution: '',
    maxZoom: 18, minZoom:3,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicnlhbm90dG8xIiwiYSI6ImNpdWVyNHNtNjAwYXUydHBncTNvcjQ4azgifQ.y_p9wdDpPsdOqzUEAQBNlg'}).addTo(mymap);



    mymap.invalidateSize(); //Fixes grey tile rendering issue (Ryan, Nikita)

    //Locate user
    mymap.locate({setView: inBound , watch: true})

        .on('locationfound', function(e){
                if(mymap.hasLayer(userMarker)){
                    mymap.removeLayer(userMarker)
                    mymap.removeLayer(userCircle)
                }
                    //logic block here for inBound boolean variable

                    //if userCoordinates are less than maxLat and less than maxLong as well as greater than minLat and minLong
                    //then inBound == true
                    if((e.latitude <= maxLat && e.latitude >= minLat) && (e.longitude <= maxLong && e.longitude>= minLong)){
                        inBound = true;
                    }else{
                        inBound = false;
                    }
                userIcon = L.icon({iconUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/25718-200.png', iconSize:[45, 50]}); //Create a custom marker icon
                userMarker = L.marker([e.latitude, e.longitude], {icon: userIcon}).addTo(mymap).bindPopup("You are here");
                userCircle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                weight: 1,
                color: 'orange',
                fillColor: '#f0c675',
                fillOpacity: 0.6});
                mymap.addLayer(userMarker);
                mymap.addLayer(userCircle);
        })


      //  .on('locationerror', function(e){
      //       console.log(e);
      //       alert("Could not find your location!"); //Error message if location not found (the borscht has been spilt [Jon,Ryan])
      //   });


     //Will become a loop pulling coordinates from the table, markers receive LatLng objects

     var markerIcon = L.icon({iconUrl: 'http://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-orange.png', iconSize:[25, 30]}); //Create a custom marker icon

    //  console.log(Markers.getMarkers().data);
     // TODO Fix for loop

     $scope.data = 'null';

             Markers.getStuff().then(function(promise){

                 $scope.data = promise;
                 var jsonData = $scope.data;
                 var dataArray = JSON.parse(JSON.stringify(jsonData))["data"];

                 console.log(dataArray.length);
                 for (i = 0; i<dataArray.length; i++) {
                   var data = dataArray[i];
                   
                   var lat = parseFloat(data["lat"]);
                   var lon = parseFloat(data["lon"]);
                   var street = data["street"];
                   var city = data["city"]
                   var state = data["state"]
                   var name = data["name"]
                   var telnum = data["telnum"]
                   var website = data["website"]
                   var descript = data["descript"]
                   var contact = data["contact"]
                   var zip = data["zip"]

                   L.marker([lat, lon], {icon: markerIcon}).addTo(mymap).bindPopup("<h4>"+name+"</h4><hr/><p>Address: "+street+" "+city+", "+state+" "+zip+" <br/> Hours: MWF 9:00 am to 5:00 pm <br/> </p>"); //Add marker with custom icon to map
                };
             });
}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
