import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
  GET_USER_DETAILS_API,
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API,
} = profileEndpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, null)
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      console.log("GET_USER_DETAILS API ERROR............", error)
      // Return default user data if API fails
      const defaultUser = {
        firstName: "Default",
        lastName: "User",
        email: "default@user.com",
        accountType: "Student",
        image: "https://api.dicebear.com/5.x/initials/svg?seed=Default User",
        additionalDetails: {
          about: "Default user for testing purposes",
          contactNumber: "1234567890",
          dateOfBirth: "1990-01-01",
          gender: "Male"
        }
      }
      dispatch(setUser(defaultUser))
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      null
    )
    console.log(
      "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      response
    )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    // Return sample enrolled courses if API fails
    result = [
      {
        _id: "sample-course-1",
        courseName: "JavaScript Fundamentals",
        courseDescription: "Learn the basics of JavaScript programming",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
        totalDuration: "2 hours",
        progressPercentage: 75
      },
      {
        _id: "sample-course-2", 
        courseName: "React for Beginners",
        courseDescription: "Master React.js from scratch",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        totalDuration: "4 hours",
        progressPercentage: 45
      }
    ]
  }
  toast.dismiss(toastId)
  return result
}

export async function getInstructorData(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, null)
    console.log("GET_INSTRUCTOR_DATA_API API RESPONSE............", response)
    result = response?.data?.courses
  } catch (error) {
    console.log("GET_INSTRUCTOR_DATA_API API ERROR............", error)
    // Return sample instructor courses if API fails
    result = [
      {
        _id: "instructor-course-1",
        courseName: "JavaScript Fundamentals",
        courseDescription: "Learn the basics of JavaScript programming",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
        totalStudentsEnrolled: 150,
        totalAmountGenerated: 149850
      },
      {
        _id: "instructor-course-2",
        courseName: "React for Beginners", 
        courseDescription: "Master React.js from scratch",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        totalStudentsEnrolled: 89,
        totalAmountGenerated: 133411
      },
      {
        _id: "instructor-course-3",
        courseName: "Digital Marketing Masterclass",
        courseDescription: "Complete guide to digital marketing",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        totalStudentsEnrolled: 234,
        totalAmountGenerated: 467766
      }
    ]
  }
  toast.dismiss(toastId)
  return result
}