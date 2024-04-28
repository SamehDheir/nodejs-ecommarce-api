const express = require("express");

const authService = require("../services/authService");

const {
  addAddress,
  removeAddress,
  getLoggedUserAddress,
} = require("../services/addressService");


const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("user"),
    getLoggedUserAddress 
  )
  .post(
    authService.protect,
    authService.allowedTo("user"),
    addAddress
  );
router
  .route("/:addressId")
  .delete(
    authService.protect,
    authService.allowedTo("user"),
    removeAddress
  );

module.exports = router;
