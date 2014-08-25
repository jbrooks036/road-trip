/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Trip      = require('../../app/models/trip'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'road-trips';

describe('Trip', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Trip object', function(){
      var f = {name: ['Ridgewood, NJ'], cash:['750'],
            origin: ['Nashville, TN, USA'],
            oLat: ['36.16'], oLng: ['-86.78'],
            destination: ['Los Angeles, CA, USA'],
            dLat: ['34.05'], dLng: ['-118.24'],
            mpg: ['35'], priceGas: ['3.55'],
          startDate: ['2014-08-29'], endDate: ['2014-09-08']},
          t = new Trip(f);
      expect(t).to.be.instanceof(Trip);
    });
  });

  describe('.all', function(){
    it('should get all trips', function(done){
      Trip.all(function(err, trips){
        expect(trips).to.have.length(2);
        done();
      });
    });
  });

  describe('.findById', function(){
    it('should return the trip with the given id', function(done){
      Trip.findById('000000000000000000000002', function(err, t){
        expect(t.name).to.equal('Seattle');
        done();
      });
    });
  });

});

