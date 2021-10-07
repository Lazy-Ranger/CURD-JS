const { UserAccountServiceInstance } = require("../../users/services");
const { JwtService } = require("../../../shared/services");
const {
  NotFoundException,
  UnauthorizedException,
} = require("../../../utils/http");

class AuthService {
  constructor() {
    this.userAccountService = UserAccountServiceInstance;
  }

  toJWTPayload(user) {
    return {
      _id: user._id,
      email: user.email,
      profile: {
        name: user.name,
        picture: user.picture,
      },
    };
  }

  toUserData(user) {
    const userDoc = user.toJSON();
    delete userDoc.password;
    return userDoc;
  }

  async createAccount(userRegistrationData) {
    const createdUser = await this.userAccountService.createUser(
      userRegistrationData
    );

    // create session
    return this.createSession(createdUser);
  }

  async login(loginReq) {
    // check Exists + Password Match

    const user = await this.userAccountService.findUserByEmail(loginReq.email);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    // check password matched
    const isPasswordMatched = await user.isValidPassword(loginReq.password);

    console.log(user, isPasswordMatched);

    if (!isPasswordMatched) {
      throw new UnauthorizedException();
    }

    // create session

    return this.createSession(user);
  }

  createSession(user) {
    // token payload prepare
    const jwtPayload = this.toJWTPayload(user);

    // create Token

    const token = JwtService.sign(jwtPayload);

    // response

    return {
      user: this.toUserData(user),
      token,
    };
  }
}

const AuthServiceInstance = new AuthService();

module.exports = { AuthServiceInstance };
