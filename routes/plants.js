const router = require("express").Router();
const plants = require("../controllers/plants");

router.get("/", plants.index);
router.post("/", plants.create);
router.get("/:id/edit",plants.edit);
router.put("/:id",plants.update);
router.delete("/:id",plants.delete);
router.get("/:id",plants.show);

module.exports = router;
