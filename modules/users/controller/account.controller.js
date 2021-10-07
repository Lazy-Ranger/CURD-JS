const { httpException } = require("../../../utils/http");
const { UsersAccountServiceInstance } = require("../services");
const { httpOK } = require("../../../utils/http");

class UsersAccountController {
  constructor() {
    this.accountService = UsersAccountServiceInstance;
  }

  changePassword = async (req, res) => {
    const userSession = req.user;
    const updateReq = req.body;
    try {
      await this.accountService.changePassword(userSession._id, updateReq);
      httpOK(res);
    } catch (err) {
      httpException(
        res,
        err,
        `[UserAccountController] cannot update user password`
      );
    }
  };
}

module.exports = new UsersAccountController();
