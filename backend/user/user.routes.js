const express = require("express");
const {
  createUserController,
  getUserController,
  getUsersController,
  deleteUserController,
  createUserBetController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/:id", getUserController);
router.get("/", getUsersController);
router.delete("/:id", deleteUserController);
router.post("/:id/bet", createUserBetController);

module.exports = router;

