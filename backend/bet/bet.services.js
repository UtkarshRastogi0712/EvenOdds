const Bet = require("./bet.schema");

const createBet = async (request) => {
  try {
    const newBet = new Bet(request);
    const savedBet = await newBet.save();
    return savedBet;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getBet = async (id) => {
  try {
    const bet = await Bet.findOne({ _id: id });
    return bet;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getBets = async () => {
    try {
        const bets = await Bet.find();
        return bets;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

 
const deleteBet = async (id) => {
  try {
    const bet = await Bet.findOne({ _id: id });
    const deletedBet = await bet?.deleteOne();
    return deletedBet;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

module.exports = { createBet, getBet, getBets, deleteBet };