const express = require("express");
const {
  createUserController,
  getUserController,
  getUsersController,
  deleteUserController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/:id", getUserController);
router.get("/", getUsersController);
router.delete("/:id", deleteUserController);

module.exports = router;

