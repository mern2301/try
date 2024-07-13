const merchantSchema = require("../models/merchantSchema");
const userSchema = require("../models/userSchema");

async function becomeMerchantController(req, res) {
  const { storename, officialemail, officialphone, address, owner, products } =
    req.body;

  const merchant = new merchantSchema({
    storename,
    officialemail,
    officialphone,
    address,
    owner,
    products,
  });
  merchant.save();
  // res.json({success: "Store created. Congratulations you are a merchant"})

  const updateRole = await userSchema.findByIdAndUpdate(
    { _id: owner },
    { role: "mercant" },
    { new: true }
  );
  res.send(merchant);
}

async function allStoreController(req, res) {
  const data = await merchantSchema.find({});
  res.send(data);
}

module.exports = { becomeMerchantController, allStoreController };
