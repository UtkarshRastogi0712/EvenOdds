const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  createUserBet,
  getUserBets
} = require("./user.services");

const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    if (!users) {
      return res
        .status(200)
        .json({ success: false, message: "Users not found" });
    }
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const createUserBetController = async (req, res) => {
  try {
    const bet = await createUserBet(req.params.id, req.body);
    res.status(201).json(bet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

const getUserBetsController = async (req, res) => {
  try{
    const bets = await getUserBets(req.params.id);
    res.status(200).json({ success: true, data: bets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createUserController,
  getUserController,
  getUsersController,
  deleteUserController,
  createUserBetController,
  getUserBetsController,
};
