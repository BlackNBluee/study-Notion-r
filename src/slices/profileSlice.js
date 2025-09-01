import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    firstName: "Default",
    lastName: "User",
    email: "default@user.com",
    accountType: "Student",
    image: "https://api.dicebear.com/5.x/initials/svg?seed=Default User",
    additionalDetails: {
      about: "Default user account",
      contactNumber: "1234567890",
      dateOfBirth: null,
      gender: null
    }
  },
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer