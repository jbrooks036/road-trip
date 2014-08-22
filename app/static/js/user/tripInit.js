/* global geocode */

(function(){
  'use strict';

  $(document).ready(function(){
    $('button[type=submit]').click(addTrip);
  });

  function addTrip(e){
    var origin = $('#origin').val(),
        destination = $('#destination').val();
    geocode(origin, function(oName, oLat, oLng){
      geocode(destination, function(dName, dLat, dLng){
        $('#origin').val(oName);
        $('#oLat').val(oLat);
        $('#oLng').val(oLng);
        $('#destination').val(dName);
        $('#dLat').val(dLat);
        $('#dLng').val(dLng);
      });
      $('form').submit();
    });
    e.preventDefault();
  }

})();

