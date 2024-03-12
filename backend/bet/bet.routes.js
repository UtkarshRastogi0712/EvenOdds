const express = require("express");
const {
  createBetController,
  getBetController,
  getBetsController,
  deleteBetController,
} = require("./bet.controller");

const router = express.Router();

router.post("/", createBetController);
router.get("/:id", getBetController);
router.get("/", getBetsController);
router.delete("/:id", deleteBetController);

module.exports = router;
