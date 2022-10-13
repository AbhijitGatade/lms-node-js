var express = require("express");
var Admin = require("../../models/admin/Admin");

var router = express.Router();

router.post("/login", async (req, res) => {
    try{
        var body = req.body;
        let admin = await Admin.find({email:body.email, password:body.password});
        if(admin.length > 0){
            res.end(JSON.stringify({ status: "success", data: admin[0] }));
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
        let admin = await Admin.find({email:body.email});
        if(admin.length > 0){

            //Send Password email
            let subject = "Password for Login";
            let body = 'Hello ' + admin.name + ", your password for login is " + admin.password;
           //Send Mail code

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
