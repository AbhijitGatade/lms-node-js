var express = require("express");
var User= require("../../models/user/User");
var router = express.Router();

router.post("/login", async (req, res) => {
    try{
        var body = req.body;
        let user = await User.find({trainerid:body.trainerid, email:body.email, password:body.password});
        if(user.length > 0){
            res.end(JSON.stringify({ status: "success", data: user[0] }));
        }
        else{
            res.end(JSON.stringify({ status: "failed", data: "Invalid credentials" }));
        }
    }catch(ex){
        res.end(JSON.stringify({ status: "failed", data: ex }));
    }
});


router.post("/forgotpassword", async (req, res) => {
    try{
        var body = req.body;
        let user = await User.find({trainerid:body.trainerid, email:body.email});
        if(user.length > 0){
            //Send Password email
            res.end(JSON.stringify({ status: "success", data: "Password sent to email." }));
        }
        else{
            res.end(JSON.stringify({ status: "failed", data: "Email doen't exists." }));
        }
    }catch(ex){
        res.end(JSON.stringify({ status: "failed", data: ex }));
    }
});

module.exports = router;
