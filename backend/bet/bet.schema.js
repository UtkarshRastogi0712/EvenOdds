const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betSchema = new Schema({
  bet: {
    type: String,
    required: true,
  },
  optionOne: {
    type: String,
    required: true,
  },
  oddsOne: {
    type: Number,
    require: true,
  },
  optionTwo: {
    type: String,
    required: true,
  },
  oddsTwo : {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true 
  },
  finishTime: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    default: 0
  },
  limit: {
    type: Number,
    default: 100
  },
  result: {
    type: Number,
    default: 0,
    enum: [0,1,2]
  }
});

module.exports = mongoose.model("Bet", betSchema);