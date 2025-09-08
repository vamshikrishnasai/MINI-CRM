const express = require("express");
const router = express.Router();

router.post("/customers", storeCustomerController);
router.get("/customers", getCustomerController);
router.get("/customers/:id", getCustomersController);
router.put("/customers/:id", updateCustomerController);
router.delete("/customers/:id", deleteCustomerController);

module.exports = router;