const emailValidation = require("../helpers/emailValidation");
const bcrypt = require('bcryptjs');
const UserList = require("../models/userSchema");
const sendEmail = require("../helpers/sendEmail");
const emailTemplate = require("../helpers/emailTemplate");
var jwt = require('jsonwebtoken');

async function registrationController(req,res){
    const { firstname, lastname, email, telephone, addressOne, city, postCode, division, district, password} = req.body;
    if(!firstname || !lastname){
      return  res.json({error: "Firstname & Lastname is required"})
    }
    
    if(!email){
        return  res.json({error: "Email is required"})
    }
    
    if(!emailValidation(email)){
        return  res.json({error: "Email is not valid"})
    }

    const existingEmail = await UserList.find({email})
    if(existingEmail.length > 0){
       return res.json({error: "Email is already in used"})
    }
    var token = jwt.sign({ email }, 'baig');
    bcrypt.hash(password, 10, function(err, hash) {
        const users = new UserList({
            firstname,
            lastname,
            email,
            telephone,
            addressOne,
            city,
            postCode,
            division,
            district,
            password: hash,
            token: email
        })
        users.save();
        // var token = jwt.sign({ email }, 'baig');
        sendEmail(email, "ECOMMERCE", emailTemplate(token))
        // res.send(users)
        res.send({
            success: "Registration Successfully done. please verify your email"
        })
    });

}
module.exports = registrationController;