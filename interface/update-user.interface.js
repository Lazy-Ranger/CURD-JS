const { IsEmail, IsOptional, IsString } = require("../utils/validation");

const IUserUpdate = {
  name: {
    type: String,
    validator: [IsOptional, IsString],
  },
  email: {
    type: String,
    validator: [IsOptional, IsEmail],
  },
  phone: {
    type: String,
    validator: [IsOptional, IsString],
  },
  address: {
    type: String,
    validator: [IsOptional, IsString],
  },
};

module.exports = {
  IUserUpdate,
};
