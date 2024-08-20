var router = require("express").Router();

const { createRole } = require("../Controllers/roleController");

router.post("/create-role", createRole);

module.exports = router;
