var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send({
       ok :1,
       data :{
           id :"1",
           name :"John Chen"
        }
      });
});

module.exports = router;