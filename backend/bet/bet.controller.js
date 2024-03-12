const {
  createBet,
  getBet,
  getBets,
  deleteBet,
} = require("./bet.services");

const createBetController = async (req, res) => {
  try {
    const bet = await createBet(req.body);
    res.status(201).json(bet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getBetController = async (req, res) => {
  try {
    const bet = await getUser(req.params.id);
    if (!bet) {
      return res
        .status(200)
        .json({ success: false, message: "Bet not found" });
    }
    res.status(200).json({ success: true, data: bet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getBetsController = async (req, res) => {
  try {
    const bets = await getBets();
    if (!bets) {
      return res
        .status(200)
        .json({ success: false, message: "Bets not found" });
    }
    res.status(200).json({ success: true, data: bets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


const deleteBetController = async (req, res) => {
  try {
    const bet = await deleteBet(req.params.id);
    res.status(200).json(bet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createBetController,
  getBetController,
  getBetsController,
  deleteBetController,
};
