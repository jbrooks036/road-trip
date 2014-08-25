'use strict';

var Mongo = require('mongodb'),
    _     = require('lodash');

function Trip(fields){
  this._id        = Mongo.ObjectID();
  this.name       = fields.name[0];
  this.cash       = parseFloat(fields.cash[0]);
  this.origin     = fields.origin[0];
  this.oLat       = parseFloat(fields.oLat[0]);
  this.oLng       = parseFloat(fields.oLng[0]);
  this.destination = fields.destination[0];
  this.dLat       = parseFloat(fields.dLat[0]);
  this.dLng       = parseFloat(fields.dLng[0]);
  this.mpg        = fields.mpg[0] * 1;
  this.priceGas   = parseFloat(fields.priceGas[0]);
  this.startDate  = fields.startDate[0];
  this.endDate    = fields.endDate[0];
}

Object.defineProperty(Trip, 'collection', {
  get: function(){return global.mongodb.collection('trips');}
});

Trip.all = function(cb){
  console.log('Trip.all');
  Trip.collection.find().toArray(cb);
};

Trip.create = function(fields, files, cb){
  var t = new Trip(fields);
  Trip.collection.save(t, cb);
};

Trip.findById = function(id, cb){
  console.log('T.fBId id: ', id);
  var _id = Mongo.ObjectID(id);
  Trip.collection.findOne({_id:_id}, function(err, obj){
    cb(err, _.create(Trip.prototype, obj));
  });
};

module.exports = Trip;

