var marker;

function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 7,
        center: {lat: 46.46117209999999, lng: 30.749565599999983}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        icon: 'beetroot.png',
        animation: google.maps.Animation.DROP,
        position: {lat: 46.46117209999999, lng: 30.749565599999983}
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

//
// // function initMap() {
// //     var uluru = {lat: 46.46117209999999, lng: 30.749565599999983};
// //     var map = new google.maps.Map(document.getElementById('map-canvas'), {
// //         zoom: 7,
// //         center: uluru
// //     });
// //     var marker = new google.maps.Marker({
// //         position: uluru,
// //         map: map,
// //         title: " { Welcome to Odessa! } ",
// //         icon: 'beetroot.png',
// //         animation: google.maps.Animation.DROP,
// //         position: {lat: 46.46117209999999, lng: 30.749565599999983}
// //     });
// // }
// // marker.setMap(map);
// //
// // google.maps.event.addDomListener(window, 'load', initMap);
//
//
//
// var directionsDisplay;
//
// var map;
//
// function initMap() {
//   directionsDisplay = new google.maps.DirectionsRenderer();
//   var myLatlng = new google.maps.LatLng(46.46117209999999,30.749565599999983);
//
//   var mapOptions = {
//     zoom:7,
//     center: myLatlng,
//       styles:[
//     {
//         "featureType": "all",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#dddddd"
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "gamma": 0.01
//             },
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "saturation": -31
//             },
//             {
//                 "lightness": 100
//             },
//             {
//                 "weight": 3
//             },
//             {
//                 "gamma": 0.8
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#050505"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#fef3f3"
//             },
//             {
//                 "weight": "3.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#0a0a0a"
//             },
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#fffbfb"
//             },
//             {
//                 "weight": "3.01"
//             },
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "lightness": 100
//             },
//             {
//                 "saturation": 30
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "lightness": 100
//             },
//             {
//                 "saturation": -20
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "lightness": 10
//             },
//             {
//                 "saturation": -30
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "saturation": 25
//             },
//             {
//                 "lightness": 25
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#a1a1a1"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#292929"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#202020"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "hue": "#0006ff"
//             },
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "13"
//             },
//             {
//                 "gamma": "0.00"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#686868"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#8d8d8d"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#353535"
//             },
//             {
//                 "lightness": "6"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ffffff"
//             },
//             {
//                 "weight": "3.45"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#d0d0d0"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "lightness": "2"
//             },
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#999898"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#383838"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#faf8f8"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "lightness": -20
//             }
//         ]
//     }
// ]
//
//
//   }
//
//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//   directionsDisplay.setMap(map);
//          var marker = new google.maps.Marker({
// 		position: myLatlng,
// 		map: map,
// 		icon: 'beetroot.png',
// 		animation: google.maps.Animation.DROP
// 	});
// }
// marker.addListener('click', toggleBounce);
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }
// google.maps.event.addDomListener(window, 'load', initMap);



