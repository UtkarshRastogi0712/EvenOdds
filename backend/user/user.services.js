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
    const user = await User.findOne({ _id: id });
    const bet = await Bet.findOne({_id: request.id});
    if(!user || !bet){
      throw new Error("Invalid request");
    }
    const time = Date.now();
    const date = new Date(time);
    if(date < bet.startTime || date > bet.finishTime){
      throw new Error("Invalid request");
    }
    let odds = 0;
    if(request.option == 1){
      odds = bet.oddsOne;
    } else if(request.option == 2){
      odds = bet.oddsTwo;
    } else {
      throw new Error("Invalid request");
    }
    const newBet = {
      "id" : request.id,
      "amount" : request.amount,
      "option" : request.option,
      "odds" : odds
    }
    const newAmount = bet.value + request.amount;
    bet.value = newAmount;
    const savedBet = await bet.save();
    if(request.option == 1){
      const delta = (1/odds)*0.1;
      const newOddsOne = 1/((1/odds)+delta);
      const newOddsTwo = 1/(1 - (1/odds)+delta);
      const updateBet = await Bet.updateMany({_id:request.id},{$set: {oddsTwo: newOddsTwo},$set: {oddsOne: newOddsOne}});
      console.log(newOddsOne, newOddsTwo, updateBet);
    } else if(request.option == 2){
      const delta = (1/odds)*0.1;
      const newOddsTwo = 1/((1/odds)+delta);
      const newOddsOne = 1/(1 - (1/odds)+delta);
      const updateBet = await Bet.updateMany({_id:request.id},{$set: {oddsOne: newOddsOne},$set: {oddsTwo: newOddsTwo}});
      console.log(newOddsOne, newOddsTwo, updateBet);
    } else {
      throw new Error("Invalid request");
    }
    const savedUser = await User.updateOne({_id: id}, {$push: {bets: newBet}});
    return savedUser;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

const getUserBets = async (id) => {
    try {
        const user = await User.findOne({_id: id});
        for(const bet of user.bets){
          const currentBet = await Bet.findOne({_id: bet.id});
          const time = Date.now();
          const date = new Date(time);
          if(currentBet.finishTime < date && bet.status!=="completed"){
            const result = currentBet.result;
            const statusUpdate = await User.updateOne({_id: id, "bets.id":bet.id}, {$set: {"bets.$.status": "completed"}}); 
            console.log(statusUpdate);
            if(result==bet.option){
              const credits = user.credits;
              const newCredits = credits+(bet.amount*bet.odds);
              const amountUpdate = await User.updateOne({_id:id, "bets.id": bet.id}, {$set: {credits : newCredits}});
              console.log(amountUpdate)
            }
          }
        };
        const updatedUser = await User.findOne({_id : id});
        return updatedUser.bets;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}


module.exports = { createUser, getUser, getUsers, deleteUser, createUserBet, getUserBets };