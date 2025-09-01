// This will allow all users to access this route (no authentication required)
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  // Allow access without authentication
  return children
}

export default OpenRoute