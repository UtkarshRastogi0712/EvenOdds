const User = require("./user.schema");

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

module.exports = { createUser, getUser, getUsers, deleteUser };