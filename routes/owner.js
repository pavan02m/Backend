const router = require("express").Router();
const owner = require("../controllers/owner");

router.get("/", owner.index);
router.post("/", owner.create);
router.get("/:id/edit",owner.edit);
router.put("/:id",owner.update);
router.delete("/:id",owner.delete);
router.get("/:id",owner.show);

module.exports = router;
