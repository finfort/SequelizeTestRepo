var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Clients
          .create({client_host_name: "client_host_name", ip: "ip", mac: "mac"})
          .then(function(err){
            res.send("OK");
          });
 
});

module.exports = router;
