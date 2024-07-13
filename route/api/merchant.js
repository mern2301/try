const express = require("express");
const {
  becomeMerchantController,
  allStoreController,
} = require("../../controller/merchantController");
const router = express.Router();

router.post("/becomemerchant", becomeMerchantController);
router.get("/allstore", allStoreController);

module.exports = router;
