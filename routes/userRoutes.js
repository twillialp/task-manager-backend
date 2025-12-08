const express = require("express");
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
} = require("../controllers/userController");

const { authMiddleware,  adminOnly, signToken} = require("../middleware/auth");

// Router
const userRouter = express.Router();

/**
 * GET /api/user/
 */
userRouter.get("/", authMiddleware, adminOnly, getAllUsers);

/**
 * GET /api/user/:id
 */
userRouter.get("/:id", getUserById);

/**
 * POST /api/user/register
 */
userRouter.post("/register", registerUser);

/**
 * POST /api/user/login
 */
userRouter.post("/login", loginUser);


// Route to start the OAuth flow
// When a user visits this URL, they will be redirected to GitHub to log in.


// The callback route that GitHub will redirect to after the user approves.


module.exports = userRouter;