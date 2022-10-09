const router = require("express").Router();
const transaction = require("../controllers/transaction");

router.get("/", transaction.index);
router.post("/", transaction.create);
router.get("/:id/edit",transaction.edit);
router.put("/:id",transaction.update);
router.delete("/:id",transaction.delete);
router.get("/:id",transaction.show);

module.exports = router;
