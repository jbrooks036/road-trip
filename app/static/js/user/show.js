/* global createMap */

(function(){
  'use strict';

  var map;
 // , locations;

  $(document).ready(function(){
//    debugger;
    map = createMap('bigmap', 39, -95, 4);
/*
    locations = getLocations();
    locations = _.sortBy(locations, function(l){return l.order;});

    locations.forEach(function(loc){
      addMarker(map, loc.lat, loc.lng, loc.name, '/img/pirate.png');
    });

    displayDirections();
*/
  });

/*
  function getLocations(){
    return $('tbody tr').toArray().map(function(tr){
      var name   = $(tr).attr('data-name'),
          lat    = $(tr).attr('data-lat') * 1,
          lng    = $(tr).attr('data-lng') * 1,
          order  = $(tr).attr('data-order') * 1;
      return {name:name, lat:lat, lng:lng, order:order};
    });
  }
*/
})();
