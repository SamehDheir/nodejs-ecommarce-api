const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("connected successfuly 🥰");
    })
    
};

module.exports = dbConnect;
