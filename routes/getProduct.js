var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send([
      {
        "id":1,
        "name":"T-Shirt",
        "price":150,
        "image":"tshirt.png",
        "description":"Fashion Nice Popularity"
      },
      {
        "id":2,
        "name":"Clothes",
        "price":99,
        "image":"clothes.png",
        "description":"Fashion Nice Popularity"
      },
      {
        "id":3,
        "name":"Clothes 2",
        "price":99,
        "image":"clothes.png",
        "description":"Fashion Nice Popularity"
      },
      {
        "id":4,
        "name":"T-Shirt 2",
        "price":170,
        "image":"tshirt.png",
        "description":"Fashion Nice Popularity"
      }
    ]);
});

module.exports = router;