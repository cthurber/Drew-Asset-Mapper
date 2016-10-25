angular.module('app.controllers', [])

// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
.controller('homeCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate',
function ($scope, $stateParams, $ionicSideMenuDelegate) {

  $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false); //Disable side scrolling opening up side menu (Jon, Ryan)
    });


var mymap = L.map('mapid').setView([40.76804,-74.235692], 13); //Set map name and default view location/zoom level
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //Initialize map with mapbox streets tileset and min/max zoom level
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18, minZoom:3,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicnlhbm90dG8xIiwiYSI6ImNpdWVyNHNtNjAwYXUydHBncTNvcjQ4azgifQ.y_p9wdDpPsdOqzUEAQBNlg'}).addTo(mymap);
    mymap.invalidateSize(); //Fixes grey tile rendering issue (Ryan, Nikita)

    //Locate user
    mymap.locate({setView: true, watch: true})
        .on('locationfound', function(e){
                var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
                var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                weight: 1,
                color: 'blue',
                fillColor: '#cacaca',
                fillOpacity: 0.2});
                mymap.addLayer(marker);
                mymap.addLayer(circle);
        })
       .on('locationerror', function(e){
            console.log(e);
            alert("Could not find your location"); //Error message if location not found (the borscht has been spilt [Jon,Ryan])
        });


     //Will become a loop pulling coordinates from the table, markers receive LatLng objects

     var markerIcon = L.icon({iconUrl: 'http://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-orange.png', iconSize:[45, 50]}); //Create a custom marker icon
     var marker = L.marker([40.76, -74.235], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf"); //Add marker with custom icon to map
     var marker2 = L.marker([40.75, -74.235], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf"); //Add marker with custom icon to map
     var marker3 = L.marker([40.74, -74.240], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf"); //Add marker with custom icon to map
     var marker4 = L.marker([40.78, -74.245], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf"); //Add marker with custom icon to map


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
 