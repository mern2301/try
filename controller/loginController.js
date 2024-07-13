const emailValidation = require("../helpers/emailValidation");
const bcrypt = require('bcryptjs');
const UserList = require("../models/userSchema");

async function loginController(req, res) {
    const { email, password } = req.body;
    if (!email) {
        return res.json({ error: "Email is required" })
    }
    else if (!emailValidation(email)) {
        return res.json({ error: "Email is not valid" })
    }
    else if (!password) {
        return res.json({ error: "Password is required" })
    } else {
        const existingEmail = await UserList.find({ email });
        if (existingEmail.length > 0) {
            console.log(existingEmail[0].password);
            bcrypt.compare(password, existingEmail[0].password).then(function (result) {
                if (result) {
                    res.json({ success: "Login Successfully done" })
                } else {
                    res.json({ error: " " })
                }
            });
        }else{
            res.json({error: "Email is not matched"})
        }
    }
}
module.exports = loginController;