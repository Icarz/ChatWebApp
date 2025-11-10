import User from "../models/user.model.js";

const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    return res.status(200).json({ users: allUsers });
  } catch (error) {
    console.log("Error in getUsersForSideBar controller:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default getUsersForSideBar;
