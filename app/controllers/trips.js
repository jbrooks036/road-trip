'use strict';

var Trip = require('../models/trip'),
      mp = require('multiparty');

exports.new = function(req, res){
  res.render('trips/new');
};

exports.create = function(req, res){
  var form = new mp.Form();
  console.log('form', form);
  form.parse(req, function(err, fields, files){
    console.log('fields', fields);
    console.log('files', files);
    Trip.create(fields, files, function(){
      res.redirect('/trips');
    });
  });
};
