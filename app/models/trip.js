'use strict';

function Trip(){
  console.log('in Trip constructor');
}

Object.defineProperty(Trip, 'collection', {
  get: function(){return global.mongodb.collection('trips');}
});

Trip.all = function(cb){
  Trip.collection.find().toArray(cb);
};

Trip.create = function(fields, files, cb){
  var t = new Trip(fields);
  Trip.collection.save(t, cb);
};


module.exports = Trip;

