var express = require("express");
var Trainer= require("../../models/admin/Trainer");
var router = express.Router();

router.post("/login", async (req, res) => {
    try{
        var body = req.body;
        let trainer = await Trainer.find({email:body.email, password:body.password});
        if(trainer.length > 0){
            res.end(JSON.stringify({ status: "success", data: trainer[0] }));
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
        let trainer = await Trainer.find({email:body.email});
        if(trainer.length > 0){
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
