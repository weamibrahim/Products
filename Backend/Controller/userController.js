const User = require("../Models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { RegistrationSchema, LoginSchema } = require("../Middleware/vaildtion");

const userController = {};
userController.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = req.body;

    const { error } = RegistrationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
   
    //console.log( user);
    //console.log('req.body:', req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    const newUser = new User({
      name,
      email,

      password: hashedPassword,
    });

    console.log("New User:", newUser);

    const savedUser = await newUser.save();
    console.log("Saved User:", savedUser);

    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser });
  } catch (err) {
    console.error("Error hashing password:", err);
    next(err);
  }
};

userController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = LoginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }
    console.log(user);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid  password" });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log(accessToken);

    res
      .status(200)
      .json({
        status: "success",
        message: "Logged in successfully",
        accessToken,
        user,
      });
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
