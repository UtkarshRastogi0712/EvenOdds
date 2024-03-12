const User = require("./user.schema");
const Bet = require("../bet/bet.schema");

const createUser = async (request) => {
  try {
    const newUser = new User(request);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

 
const deleteUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    const deletedUser = await user?.deleteOne();
    return deletedUser;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const createUserBet = async (id, request) => {
    try {
    const newBet = {}  
    const user = await User.findOne({ _id: id });
    const bet = await Bet.findOne({_id: request.id});
    if(!user || !bet){
      throw new Error("Invalid request");
    }
    const time = Date.now();
    const date = new Date(time);
    console.log(date, bet.startTime, bet.finishTime);
    if(date < bet.startTime || date > bet.finishTime){
      throw new Error("Invalid request");
    }
    newBet["id"] = request.id;
    newBet["amount"] = request.amount;
    newBet["option"] = request.option;
    if(request.option == 1){
      newBet["odds"] = bet.oddsOne;
    } else if(request.option == 2){
      newBet["odds"] = bet.oddsTwo;    
    } else {
      throw new Error("Invalid request");
    }
    user.bets.push(newBet);
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

module.exports = { createUser, getUser, getUsers, deleteUser, createUserBet };