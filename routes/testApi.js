var express = require("express");
var router = express.Router();

router.get("/",function(req, res, next){
    res.send("APi is working Rahul");
});

module.exports=router;