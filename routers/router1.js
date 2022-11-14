const router1 = require("express").Router();

//get request
router1.route("/router1").get((req, res)=>{
    res.send("Hello from router1 get request");
});

//post request
router1.route("/router1").post((req, res)=>{
    console.log(req.body);
    res.send("Hello from router1 post request");
});

//put request
router1.route("/router1").put((req, res)=>{
    console.log(req.body);
    res.send("Hello from router1 put request");
    
});

//Delete Request
router1.route("/router1").delete((req, res)=>{
    console.log(req.body);
    res.send("Hello from router1 delete request");
});



module.exports =router1;