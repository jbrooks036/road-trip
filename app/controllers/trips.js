'use strict';

var Trip = require('../models/trip'),
      mp = require('multiparty');

exports.new = function(req, res){
  res.render('trips/new');
};

exports.index = function(req, res){
  console.log('controller 2 index');
  Trip.all(function(err, trips){
    console.log('controller index/trips: ', trips);
    res.render('trips/index', {trips:trips});
  });
};

exports.create = function(req, res){
  var form = new mp.Form();
  form.parse(req, function(err, fields, files){
    console.log('fields', fields);
    console.log('files', files);
    Trip.create(fields, files, function(){
      res.redirect('/trips');
    });
  });
};
