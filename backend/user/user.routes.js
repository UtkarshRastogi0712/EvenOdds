const express = require("express");
const {
  createUserController,
  getUserController,
  getUsersController,
  deleteUserController,
  createUserBetController,
  getUserBetsController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/:id", getUserController);
router.get("/", getUsersController);
router.delete("/:id", deleteUserController);
router.post("/:id/bet", createUserBetController);
router.get("/:id/bets", getUserBetsController);

module.exports = router;

