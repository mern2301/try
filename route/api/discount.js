const express = require("express");
const {
  discountController,
  getDiscount,
} = require("../../controller/discountController");
const router = express.Router();

router.post("/creatediscount", discountController);
router.get("/getdiscount", getDiscount);
module.exports = router;
