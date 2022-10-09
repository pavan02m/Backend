const router = require("express").Router();
const carts = require("../controllers/carts");

router.get("/", carts.index);
router.post("/", carts.create);
router.get("/:id/edit",carts.edit);
router.put("/:id",carts.update);
router.delete("/:id",carts.delete);
router.get("/:id",carts.show);

module.exports = router;
