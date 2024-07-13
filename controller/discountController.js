const discountSchema = require("../models/discountSchema");
function discountController(req, res) {
  const { percent, cash, flat, category, subCategory, product } = req.body;

  if(cash, product){
  const discount = new discountSchema({
    cash,
    product,
  });
  discount.save();
  }else if (cash, category){
    const discount = new discountSchema({
      cash,
      category,
    });
    discount.save();
  }else if(cash, subCategory){
    const discount = new discountSchema({
      cash,
      subCategory,
    });
    discount.save();
  }
  // const discount = new discountSchema({
  //   percent,
  //   cash,
  //   flat,
  //   category,
  //   subCategory,
  //   product,
  // });
  // discount.save();
  res.json({ success: "Discount created successful" });
}

async function getDiscount(req, res) {
  const data = await discountSchema
    .find({})
    .populate(["category", "subCategory", "product"]);
  res.json(data);
}
module.exports = { discountController, getDiscount };
