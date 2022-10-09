const bcrypt = require("bcrypt");
require('dotenv').config();
const userModel = require("../schema/users");
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  register: async (req, res) => {
    try {
      const { password, email } = req.body;
      const isEmailTaken = await userModel.findOne({ email });
      if (isEmailTaken)
        return res.status(400).json({ message: "Email already exists" });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      delete req.body.password;

      const user = await userModel.create({
        email,
        password : hashPassword,
        ...req.body
      });
      res.send({ message: "user created successfully !", user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  login: async (req, res) => {
    try {
      const { password, email } = req.body;

      const userData = await userModel.findOne({ email }).populate('role');
      console.log(userData);
      if (!userData)
        return res.status(400).json({ message: "User is not registered" });

      const passwordCompare = await bcrypt.compare(password, userData.password);

      if (passwordCompare) {
        const data = {
          user: {
            id: userData._id,
            email: userData.email,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "24h" });
        return res.status(200).json({
          status: "success",
          message: "User logged in",
          token: authToken,
          role: userData.role.name,
        });
      }
      return res.status(400).json({ message: "Incorrect credentials" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};
