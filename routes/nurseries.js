const router = require("express").Router();
const nursery = require("../controllers/nursery");

router.get("/", nursery.index);
router.post("/", nursery.create);
router.get("/:id/edit",nursery.edit);
router.put("/:id",nursery.update);
router.delete("/:id",nursery.delete);
router.get("/:id",nursery.show);

module.exports = router;
