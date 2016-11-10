angular.module('app.controllers', [])

// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
.controller('homeCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate',
function ($scope, $stateParams, $ionicSideMenuDelegate) {

  $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false); //Disable side scrolling opening up side menu (Jon, Ryan)
    });

var jsonData = JSON.parse('{"data": [["40.76585", "-74.246015", "425 South Jefferson Street", "Orange", "NJ", "07050"], ["40.769978", "-74.237805", "170 Scotland Road", "Orange", "NJ", "07050"], ["40.736881", "-74.175237", "89 Market Street 6th Floor", "Newark", "NJ", "07102"], ["40.766269", "-74.244933", "542 Freeman Street", "Orange", "NJ", "07050"], ["40.766225", "-74.244819", "540B Freeman Street", "Orange", "NJ", "07050"], ["40.766456", "-74.243161", "350 Scotland Rd", "Orange", "NJ", "07050"], ["40.774015", "-74.233626", "425 Main Street", "Orange", "NJ", "07050"], ["40.77418", "-74.225628", "229 Wallace street", "Orange", "NJ", "07050"], ["40.773391", "-74.23012", "26 N Essex Ave", "Orange", "NJ", "07050"], ["40.785873", "-74.233103", "242 Main St", "West Orange", "NJ", "07052"], ["40.772747", "-74.228974", "16-26 North Day Street", "Orange", "NJ", "07050"], ["40.772641", "-74.231689", "350 Main St", "Orange", "NJ", "07050"], ["40.770181", "-74.223628", "105 Main Street", "Orange", "NJ", "07050"], ["40.768996", "-74.230158", "103 S Center St", "Orange", "NJ", "07050"], ["40.763795", "-74.235264", "270 Reynolds Terrace ", "Orange", "NJ", "07050"], ["40.773061", "-74.229086", "29 North Day Street Floor#3", "Orange", "NJ", "07050"], ["40.752967", "-74.214618", "115 S Munn Ave", "East Orange", "NJ", "07018"], ["40.769457", "-74.224821", "130 Main St", "Orange", "NJ", "07050"], ["40.762572", "-74.226353", "26 North central Street", "Orange", "NJ", "07018"], ["40.773061", "-74.229086", "29 North Day Street Floor#3", "Orange", "NJ", "07050"], ["40.773061", "-74.229086", "29 North Day Street Floor#2", "Orange", "NJ", "07050"], ["40.752661", "-74.236114", "385 Tremont Ave #143", "East Orange", "NJ", "07018"], ["40.764878", "-74.24896", "518 Valley St", "Orange", "NJ", "07050"], ["40.772476", "-74.229258", "285 Main Street", "Orange", "NJ", "07050"], ["40.768558", "-74.219541", "26 Baldwin Street", "East Orange", "NJ", "07017"], ["40.75976", "-74.227445", "280 S Harrison St", "East Orange", "NJ", "07018"], ["40.761421", "-74.234829", "395 South Center Street", "Orange", "NJ", "07050"], ["40.770499", "-74.220189", "7 Glenwood Ave Suite 101", "East Orange", "NJ", "07017"], ["40.764725", "-74.221438", "86 S Harrison St # A", "East Orange", "NJ", "07018"], ["40.765166", "-74.247241", "580 Forest St.", "Orange", "NJ", "07940"], ["40.77428", "-74.231412", "35 Cleveland St.", "Orange", "NJ", "07050"], ["40.769379", "-74.227736", " Bldg #1 50 S Center St", "Orange", "NJ", "07050"], ["40.772559", "-74.229839", "303 Main St", "Orange", "NJ", "07050"], ["40.772299", "-74.231588", "15 S Essex Ave", "Orange", "NJ", "07050"], ["40.772015", "-74.217732", "60 Glenwood Ave ", "East Orange", "NJ", "07017"], ["40.76603", "-74.248581", "459 Valley Street ", "Orange", "NJ", "07050"], ["40.765799", "-74.225704", "Oakwood Avenue School: 135 Oakwood Avenue ", "Orange", "NJ", "07050"], ["40.803822", "-74.213351", "1 Woodland Ave", "Montclair", "NJ", "07042"], ["40.760665", "-74.226244", " 240 S Harrison St", "East Orange", "NJ", "07018"], ["40.763327", "-74.220619", "60 Evergreen Place 3rd Floor Suite 307", "Orange", "NJ", "07050"], ["40.766332", "-74.233046", "257 Central Ave", "Orange", "NJ", "07050"], ["40.770181", "-74.223628", "105 Main Street", "Orange", "NJ", "07050"], ["40.768666", "-74.216603", "57 Prospect Street", "East Orange", "NJ", "07017"], ["40.773411", "-74.234853", "420 Main St", "Orange", "NJ", "07050"], ["40.766355", "-74.205377", "238 North Munn Ave", "East Orange", "NJ", "07017"], ["40.721816", "-74.307074", "105 Main Street", "Millburn", "NJ", "07041"], ["40.76892", "-74.234638", "345 Henry St #104", "Orange", "NJ", "07050"], ["40.758296", "-74.417231", "37 Kings Road", "Madison", "NJ", "07940"], ["40.782343", "-74.217808", "374 Dodd St", "East Orange", "NJ", "07017"], ["40.764821", "-74.242621", "448 Highland Avenue", "Orange", "NJ", "07050"], ["40.769173", "-74.246448", "555 Valley Road", "West Orange", "NJ", "07052"], ["40.921557", "-74.088285", "61 South Paramus Rd", "Paramus", "NJ", "07652"], ["40.857604", "74.200275", "Montclair State University 1 Normal Ave", "Montclair", "NJ", "07043"], ["40.773696", "-74.231019", " 24 Cleveland St", "Orange", "NJ", "07051"], ["40.760814", "-74.209346", "P.O. Box 1127", "East Orange", "NJ", "07019"], ["40.787922", "-74.217871", "622 Thomas Street", "East Orange", "NJ", "07017"], ["40.773061", "-74.229086", "29 N Day St", "Orange", "NJ", "07050"], ["40.773319", "-74.228906", "37 north day street", "Orange", "NJ", "07050"], ["40.778298", "-74.229397", "397 Park Avenue", "Orange", "NJ", "07050"], ["40.767532", "-74.238672", "419 Central Ave", "Orange", "NJ", "07050"], ["40.764699", "-74.230553", "170 Central Ave", "Orange", "NJ", "07050"], ["40.766608", "-74.246317", "406 Tompkins St.", "Orange", "NJ", "07050"], ["40.771386", "-74.225494", "29 Park Street", "Orange", "NJ", "07050"], ["40.766426", "-74.238517", "400 Central Ave", "Orange", "NJ", "07050"], ["40.772863", "-74.23145", " 348 Main St", "Orange", "NJ", "07050"], ["40.764552", "-74.24918", "510 Valley St", "Orange", "NJ", "07050"], ["40.710074", "-74.079624", "334 Martin Luther King Dr", "Jersey City", "NJ", "07305"], ["40.758486", "-74.228069", "320 S Harrison St #7e", "East Orange", "NJ", "07018"], ["40.773513", "-74.232111", "369 Main St", "Orange", "NJ", "07050"], ["40.772106", "-74.231697", "23 S Essex Ave", "Orange", "NJ", "07050"], ["40.75667", "-74.206249", "11 South Maple Ave", "East Orange", "NJ", "07018"], ["40.768831", "-74.241028", "501 Central Ave. ", "Orange", "NJ", "07050"], ["40.776776", "-74.232735", "94 Ridge Street.", "Orange", "NJ", "07050"], ["40.768223", "-74.23083", "135 S Center St", "Orange", "NJ", "07050"], ["40.752161", "-73.972835", "711 Third Avenue - Suite 700", "New York City", "NY", "10017"], ["40.770008", "-74.22368", "105 Main Street", "Orange", "NJ", "07050"], ["40.764781", "-74.242536", "448 Highland Ave", "Orange", "NJ", "07050"], ["40.765166", "-74.247241", "580 Forest St.", "Orange", "NJ", "07940"], ["40.815067", "-74.220712", "67 Church Street", "Montclair", "NJ", "07042"], ["40.760212", "-74.236337", "231 Roberts Rd", "Orange", "NJ", "07050"], ["40.734612", "-74.176488", "303 Washington Street", "Newark", "NJ", "07102"], ["40.772299", "-74.231588", "15 S Essex Ave", "Orange", "NJ", "07050"], ["40.773007", "-74.232699", "384 Main St", "Orange", "NJ", "07050"], ["40.766084", "-74.245146", "400 South Jefferson Street", "Orange", "NJ", "07050"], ["40.733945", "-74.270172", "515 Valley St #201", "Maplewood", "NJ", "07040"], ["40.764071", "-74.207502", "159 N. MUNN AVE.", "East Orange", "NJ", "07017"], ["40.755025", "-74.244545", " 332 Lawn Ridge Rd", "Orange", "NJ", "07050"], ["40.773774", "-74.232645", "395 Main St", "Orange", "NJ", "07050"]]}');

var mymap = L.map('mapid').setView([40.76804,-74.235692], 13); //Set map name and default view location/zoom level
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


       .on('locationerror', function(e){
            console.log(e);
            alert("Could not find your location!"); //Error message if location not found (the borscht has been spilt [Jon,Ryan])
        });


     //Will become a loop pulling coordinates from the table, markers receive LatLng objects

     var markerIcon = L.icon({iconUrl: 'http://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-orange.png', iconSize:[45, 50]}); //Create a custom marker icon
     var marker = L.marker([40.76, -74.235], {icon: markerIcon}).addTo(mymap).bindPopup("<h4>I am an orange leaflet</h4><hr/><p>Description: Something about this place! <br/> Hours: MWF 9:00 am to 5:00 pm <br/> </p>"); //Add marker with custom icon to map
     var marker2 = L.marker([40.75, -74.235], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leafer"); //Add marker with custom icon to map
     var marker3 = L.marker([40.74, -74.240], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf for life"); //Add marker with custom icon to map
     var marker4 = L.marker([40.78, -74.245], {icon: markerIcon}).addTo(mymap).bindPopup("I am an orange leaf forever"); //Add marker with custom icon to map

     for (i = 0; i<80; i++) {
       var data = jsonData["data"][i];

       var lat = parseFloat(data[0]);
       var lon = parseFloat(data[1]);
       var street = data[2];
       var city = data[3]
       var state = data[4]
       var zip = data[5]

       L.marker([lat, lon], {icon: markerIcon}).addTo(mymap).bindPopup("<h4>"+street+"</h4><hr/><p>Address: "+street+" "+city+", "+state+" "+zip+" <br/> Hours: MWF 9:00 am to 5:00 pm <br/> </p>"); //Add marker with custom icon to map
    };


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
