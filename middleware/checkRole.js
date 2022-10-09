const userModel = require("../schema/users");
const { verify } = require("jsonwebtoken");

const checkRole = (role) => {
  return async (req, res, next) => {

    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];

      let decoded = verify(token, process.env.JWT_SECRET);
      
      req.user = decoded.user.email;
      const user = await userModel.findOne({ email: req.user });
      await user.populate({
        path: "role",
      });

      if(user.role.name === role){
        next();
      }else{
        return res.status(401).json({ message: "u dont have required rights!!" });
      }

    } else {
      return res.status(401).json({ message: "unathorized user" });
    }
  };
};

module.exports = {
  checkRole,
};