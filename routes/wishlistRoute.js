const express = require("express");

const authService = require("../services/authService");

const {
  addProductToWishlist,
  removeProductToWishlist,
  getLoggedUserWishlist,
} = require("../services/wishlistService");

const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("user"),
    getLoggedUserWishlist
  )
  .post(
    authService.protect,
    authService.allowedTo("user"),
    addProductToWishlist
  );
router
  .route("/:id")
  .delete(
    authService.protect,
    authService.allowedTo("user"),
    removeProductToWishlist
  );

module.exports = router;
