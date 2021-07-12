import User from "../models/userModdel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//desc Auth user & get token
//@route Post api/users/login
//@access publicc
export const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }
});

//desc Get user profile
//@route GEt api/users/profile
//@access private
export const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
