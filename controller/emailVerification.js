var jwt = require('jsonwebtoken');
const UserList = require('../models/userSchema');

async function emailVerification(req,res){
  const {authorization} = req.headers;
  var decoded = jwt.verify(authorization, 'baig');
  console.log(decoded.email);
  const updateUser = await UserList.findOneAndUpdate(
    {email: decoded.email},
    {verified: true},
    {new:true}
  )
  res.json({success: 'Email verification successfully done'})
}

async function verification(req,res){

  const {id} = req.params;
  var decoded = jwt.verify(id, 'baig');
  console.log(decoded);
  if(decoded){
    const updateUser = await UserList.findOneAndUpdate(
      {email: decoded.email},
      {verified: true},
      {new:true}
    )
  }
  res.redirect("http://localhost:5173/login")
}

module.exports = {emailVerification, verification}