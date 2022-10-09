const router = require("express").Router();
const users = require("../controllers/users");

router.get("/", users.index);
router.post("/", users.create);
router.get("/:id/edit",users.edit);
router.put("/:id",users.update);
router.delete("/:id",users.delete);
router.get("/:id",users.show);

module.exports = router;
