const express = require("express");
const router = express.Router();

router.post("/customers/:id/leads", leadController);
router.put("/leads/:id", leadController);
router.get("/leads", leadController);
router.get("/leads/:id", leadController);
router.delete("/leads/:id", leadController);
module.exports = router;
