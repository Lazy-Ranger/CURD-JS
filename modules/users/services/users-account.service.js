const { USER_MODEL } = require("../../../models");
const {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} = require("../../../utils/http");

const { hash } = require("bcrypt");
const { BCRYPT_CONFIG } = require("../../../config");

class UsersAccountService {
  constructor() {
    this.userModel = USER_MODEL;
  }

  async createUser(userRegistrationData) {
    //   check if user exists

    const isUserExists = await this.userModel.findOne({
      email: userRegistrationData.email,
    });

    if (isUserExists) {
      throw new ConflictException("User already exists");
    }

    const createUser = await this.userModel.create(userRegistrationData);

    return createUser;
  }

  async findUserByEmail(email) {
    const isUserExists = await this.userModel.findOne({ email }, "+password");
    return isUserExists;
  }

  async changePassword(userId, passwordChangeReq) {
    const { oldPassword, newPassword } = passwordChangeReq;
    const user = await this.userModel.findById(userId, "+password");
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const isPasswordMatched = await user.isValidPassword(oldPassword);

    if (!isPasswordMatched) {
      throw new UnauthorizedException("Old password not matched");
    }

    const newHashedPassword = await hash(newPassword, BCRYPT_CONFIG.ROUNDS);

    await this.userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { password: newHashedPassword } }
    );
  }
}

const UsersAccountServiceInstance = new UsersAccountService();

module.exports = {
  UsersAccountServiceInstance,
};
