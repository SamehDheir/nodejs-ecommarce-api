const jwt = require("jsonwebtoken");

const createToken = (peloyed) =>
  jwt.sign({ userId: peloyed }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });

  module.exports = createToken
