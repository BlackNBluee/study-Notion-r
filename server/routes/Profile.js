const express = require("express")
const router = express.Router()
const { auth ,isInstructor } = require("../middlewares/auth")
const { instructorDashboard } = require("../controllers/Profile") 
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", deleteAccount)
router.put("/updateProfile", updateProfile)
router.get("/getUserDetails", getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/instructorDashboard", instructorDashboard)

module.exports = router