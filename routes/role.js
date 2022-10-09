const router = require("express").Router();
const role = require("../controllers/role");

router.get("/", role.index);
router.post("/", role.create);
router.get("/:id/edit",role.edit);
router.put("/:id",role.update);
router.delete("/:id",role.delete);
router.get("/:id",role.show);

module.exports = router;
