var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send({
        ok:1,
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gQ2hlbiIsImlhdCI6MTUxNjIzOTAyMn0.LnNVVtIFbNFXycQxZI-wXiKVzknv2AQl5-sZ5Li3rgo"
      });
});

module.exports = router;