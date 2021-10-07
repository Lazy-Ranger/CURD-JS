const {
  IsEmail,
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
} = require("../utils/validation");

const ICreateUser = {
  name: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
  email: {
    type: String,
    validator: [IsNotEmpty, IsEmail],
  },
  password: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
  phone: {
    type: String,
    validator: [IsNotEmpty, IsString, IsPhoneNumber],
  },
  address: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
};

module.exports = { ICreateUser };
