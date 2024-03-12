const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  walletId: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    enum : ["user", "admin"],
    default: "user",
  },
  credits: {
    type: Number,
    default: 0
  },
  bets: [{
    id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required : true 
    },
    odds: {
        type: Number,
        required: true,
    },
    option: {
        type: Number,
        required: true
    }
  }]
});

module.exports = mongoose.model("User", userSchema);
