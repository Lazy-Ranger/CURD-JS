const { IsEmail, IsNotEmpty, IsString } = require("../utils/validation");

const ILoginUser = {
  email: {
    type: String,
    validator: [IsNotEmpty, IsEmail],
  },
  password: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
};

module.exports = { ILoginUser };
