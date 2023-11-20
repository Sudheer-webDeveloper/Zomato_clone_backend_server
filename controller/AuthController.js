const User = require("../models/UsersModal");
const jwt = require("jsonwebtoken");
const { hashingPassword, comparePassword } = require("../helpers/auth");

const registerUser = async (req, res) => {
  try {
    // step 1 //
    const { name, email, password } = req.body;

    // step2 // applyin conditions
    if (!name) {
      return res.json({
        error: "Name must require",
      });
    }
    if (!email) {
      return res.json({
        error: "Email must require",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "password require and must contain 6 characters",
      });
    }
    // step 3  // we can check whether user or there or not by many ways but here I am checking based on email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exist",
      });
    }

    // step 4 // hashing password
    const hashedPassword = await hashingPassword(password);

    // step 5 //  // creting the user and pushing the user to the DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.send(user);
  } catch (error) {
    console.log(error);
    console.log("user error I don't know why");
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "User not found, email does not match",
      });
    }

    const match  = await comparePassword(password, user.password);

    if (match) {
      jwt.sign(
        { email: user.email, id: user.id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          console.log("token", token);
          res.cookie("token", token).json(user); //res.cookie("token", token,{httpOnly:true}).json(user);
        }
      );
    } else {
      res.json({
        error: "Password doesn't match, please re-register",
      });
    }
  } catch (error) {
    // Handle errors appropriately
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies; // in the login route we send the all the data to the cookie , now we are accsessing the data from the cookie and sending it to the frontend

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      console.log("user", user);
      res.json(user); // if user exsist and token matches the useeffect will give this user to the frontend on every render
    });
  } else {
    res.json(null);
  }
};

module.exports = { registerUser, loginUser, getProfile };



/*
The information you provided seems to be related to a user or a token in a system. The field "iat" typically stands for "issued at" and represents the time at which the JWT (JSON Web Token) was issued. In this case, the timestamp 1699977796 translates to a specific date and time. This timestamp is likely in Unix time format, which counts the number of seconds that have elapsed since January 1, 1970 (UTC).

So, the "iat" value of 1699977796 corresponds to a specific moment in time, but to get the exact date and time, it needs to be converted from Unix time to a human-readable date format using a programming language or an online converter.

user {
  email: 'shimla@gmail.com',
  id: '65539a16cd613ca2b344f671',
  name: 'frined',
  iat: 1699977796
}
*/