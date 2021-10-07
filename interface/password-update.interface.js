const { IsNotEmpty, IsString } = require("../utils/validation");

const IUpdatePassword = {
  oldPassword: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
  newPassword: {
    type: String,
    validator: [IsNotEmpty, IsString],
  },
};

module.exports = {
  IUpdatePassword,
};
